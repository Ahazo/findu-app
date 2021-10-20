import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface ISignIn {
  username: string;
  password: string;
}

interface IAuthContext {
  userToken: string | null;
  signIn(credentials: ISignIn): Promise<void>;
  signOut(): void;
  isLoading: boolean;
  hasError: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const asyncStorageToken = await AsyncStorage.getItem('@Ahazo:token');

      if (!asyncStorageToken) {
        setHasError(true);
        return;
      }

      api.defaults.headers.authorization = `Bearer ${asyncStorageToken}`;
      setUserToken(asyncStorageToken);
      
      setIsLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/api/users/session', {
      username,
      password,
    });

    const { token } = response.data;

    await AsyncStorage.multiSet([
      ['@Ahazo:token', token]
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setUserToken(token);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Ahazo:token', '@Ahazo:user']);
    setUserToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userToken,
        isLoading,
        signIn,
        signOut,
        hasError
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
