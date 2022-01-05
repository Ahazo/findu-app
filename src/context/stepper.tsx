import { createContext, useCallback, useContext, useState } from "react";
import AuthProvider from "./auth";

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
	house_number: number;
	complement: string;
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
	setPersonalData(personalData: IPersonalData): void;
	setAddressData(addressData: IAddressData): void;
	setLoginData(loginData: ILoginData): void;
	handleNextStep(): void;
	handlePreviousStep(): void;
	// signUp(userData: IUserFormData): Promise<void>;
}

export interface ISteps {
	icon: string;
	label: string;
	isCompleted: boolean;
}

const StepperContext = createContext<IStepperContext>({} as IStepperContext);

const StepperProvider: React.FC = ({ children }) => {
	const [personalData, setPersonalData] = useState<IPersonalData>({} as IPersonalData);
	const [addressData, setAddressData] = useState<IAddressData>({} as IAddressData);
	const [loginData, setLoginData] = useState<ILoginData>({} as ILoginData);

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
	const [hasError, setHasError] = useState(false);

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


	return (
		<StepperContext.Provider
      value={{
				steps,
				currentStepIndex,
        isLoading,
				setAddressData,
				setLoginData,
				setPersonalData,
				handleNextStep,
				handlePreviousStep
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