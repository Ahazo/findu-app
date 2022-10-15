import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface ILoginData {
	username: string;
	password: string;
}

interface IUserFormData extends ILoginData {
	person: IPersonalData & {
		address: IAddressData;
	}
}

interface IAddressData {
	postal_code: string;
	street: string;
	number: number;
	neighborhood: string;
	state: string;
	city: string;
}

interface IPersonalData {
	cpf: string;
	email: string;
	cellphone_number: string;
	birth_date: string;
	first_name: string;
	last_name: string;
}

interface IStepperContext {
	isLoading: boolean;
	steps: ISteps[];
	currentStepIndex: number;
	hasError: boolean;
	personalData: IPersonalData;
	addressData: IAddressData;
	loginData: ILoginData;
	setPersonalData(personalData: IPersonalData): void;
	setAddressData(addressData: IAddressData): void;
	setLoginData(loginData: ILoginData): void;
	handleNextStep(): void;
	handlePreviousStep(): void;
	handleChangeStep(changingIndex: number): void;
	signUp(): Promise<void>;
	setIsLoading(value: boolean): void;
}

export interface ISteps {
	icon: "at-sign" | "user" | "home";
	label: string;
	isCompleted: boolean;
}

const StepperContext = createContext<IStepperContext>({} as IStepperContext);

const StepperProvider: React.FC = ({ children }) => {
	const [personalData, setPersonalData] = useState<IPersonalData>({} as IPersonalData);
	const [addressData, setAddressData] = useState<IAddressData>({} as IAddressData);
	const [loginData, setLoginData] = useState<ILoginData>({} as ILoginData);

	const [hasError, setHasError] = useState(false);

	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [steps, setSteps] = useState<ISteps[]>([
		{
			icon: "user",
			label: "Informações Pessoais",
			isCompleted: false
		},
		{
			icon: "home",
			label: "Endereço",
			isCompleted: false
		},
		{
			icon: "at-sign",
			label: "Acesso",
			isCompleted: false
		},
	]);

	const [isLoading, setIsLoading] = useState(false);
	// const [hasError, setHasError] = useState(false);

	const getPersonalData = (): IPersonalData => {
		return personalData;
	}

	const getAddressData = (): IAddressData => {
		return addressData;
	}

	const getLoginData = (): ILoginData => {
		return loginData;
	}

	const handleNextStep = useCallback(() => {
		setIsLoading(true);
		const nextStep = currentStepIndex + 1;

		if (nextStep > steps.length - 1) return;

		setSteps([...steps].map((step, index) => {
			if (currentStepIndex === index) {
				step.isCompleted = true;
			}
			return step;
		}));
		setCurrentStepIndex(nextStep);
		setIsLoading(false);
	}, [currentStepIndex, steps]);

	const handlePreviousStep = useCallback(() => {
		setIsLoading(true);
		const previousStep = currentStepIndex - 1;

		if (previousStep < 0) return;

		setSteps([...steps].map((step, index) => {
			if (currentStepIndex === index) {
				step.isCompleted = true;
			}
			return step;
		}));
		setCurrentStepIndex(previousStep);
		setIsLoading(false);
	}, [currentStepIndex, steps]);

	const handleChangeStep = (destinationIndex: number) => {
		steps.forEach((step, index) => {
			if(destinationIndex <= index) {
				step.isCompleted = false;
			}
		});
		setCurrentStepIndex(destinationIndex);
	}

	const signUp = async () => {
		setIsLoading(true);
		if (!loginData || !personalData || !addressData) {
			setHasError(true);
			setIsLoading(false);
			return;
		}
		try {
			const data: IUserFormData = {
				...loginData,
				person: {
					...personalData,
					address: {
						...addressData
					}
				}
			}
	
			const response = await api.post('/users/', data);
			if (response.status !== 200) {
				setHasError(true);
				setIsLoading(false)
				return;
			}
	
			const { token } = response.data;
	
			await AsyncStorage.multiSet([
				['@Ahazo:token', token]
			]);
	
			api.defaults.headers.authorization = `Bearer ${token}`;
			setIsLoading(false);
		} catch (err: any) {
			console.error(err.message);
			setHasError(true);
			setIsLoading(false)
			return;
		}
	}

	return (
		<StepperContext.Provider
      value={{
				steps,
				currentStepIndex,
        isLoading,
				hasError,
				personalData,
				loginData,
				addressData,
				setAddressData,
				setLoginData,
				setPersonalData,
				handleNextStep,
				handlePreviousStep,
				handleChangeStep,
				signUp,
				setIsLoading
      }}
    >
      {children}
    </StepperContext.Provider>
	);
}

export function useStepper(): IStepperContext {
	const context = useContext(StepperContext);

	if (!context) {
		throw new Error('useStepper must be used within an StepperProvider');
	}

	return context;
}

export default StepperProvider;