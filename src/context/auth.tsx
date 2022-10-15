import React, {
  createContext,
  useState,
  useContext,
  useEffect,
	useCallback,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';;

interface ISignIn {
  username: string;
  password: string;
}

interface IAuthContextError {
	message: string;
	status?: number;
}

interface IAuthContext {
  userToken: string | null;
  signIn(credentials: ISignIn): Promise<void>;
  signOut(): void;
	loadUserData(): Promise<void>;
	setIsLoading(bool: boolean): void;
	user: IUserReponse
  isLoading: boolean;
  hasError: boolean;
	errorObject: IAuthContextError;
	userType: USER_TYPE;
}

interface ISignin {
	username: string;
	password: string;
}

interface IUserReponse {
	id: string;
	username: string;
	cpf: string;
	email: string;
	cellphone_number: string;
	first_name: string;
	last_name: string;
	birth_date: Date;
	postal_code: string;
	street: string;
	number: number;
	city: string;
	state: string;
	neighborhood: string;
	description: string;
	follower_count: number;
	following_count: number;
	freelancer?: {
		id: string;
		title: string;
		projects_count: number;
		open_to_work: boolean;
	};
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export enum USER_TYPE {
	DEFAULT,
	FREELANCER
}

const AuthProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
	const [user, setUser] = useState({} as IUserReponse);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorObject, setErrorObject] = useState<IAuthContextError>({} as IAuthContextError);
	const [userType, setUserType] = useState<USER_TYPE>(USER_TYPE.DEFAULT);

  useEffect(() => {
    async function loadStorageData() {
			setIsLoading(true);
      const asyncStorageToken = await AsyncStorage.getItem('@Ahazo:token');
      if (!asyncStorageToken) {
				signOut();
				setIsLoading(false);
        return;
      }
      api.defaults.headers.authorization = `Bearer ${asyncStorageToken}`;
			setUserToken(asyncStorageToken);
			setIsLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ username, password }: ISignin): Promise<void> => {
		setIsLoading(true);
		setHasError(false);
		await api.post('/users/session', {
			username,
			password,
			}).then(async (response) => {
				const { token } = response.data;
				await AsyncStorage.multiSet([
					['@Ahazo:token', token]
				]);
				api.defaults.headers.authorization = `Bearer ${token}`;
				setUserToken(token);
				setIsLoading(false);
			}).catch(err => {
				setHasError(true);
				setErrorObject({
					message: err.message,
					status: err.status
				});
				setIsLoading(false);
			});
		setIsLoading(false);
	}, [])

	const loadUserData = async () => {
		const response = await api.get('/users');
		if (!response || response.status !== 200) {
			setUser({} as IUserReponse);
			signOut();
			return;
		}
		setUser(response.data as IUserReponse);
		if (response.data.freelancer) {
			setUserType(USER_TYPE.FREELANCER)
		};
	};

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@Ahazo:token', '@Ahazo:user']);
    setUserToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        userToken,
        isLoading,
				setIsLoading,
        signIn,
        signOut,
				loadUserData,
				user,
        hasError,
				errorObject,
				userType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthProvider;
