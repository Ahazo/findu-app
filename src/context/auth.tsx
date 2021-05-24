import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api';
import { Status } from '../constants/status';

interface User {
  campaigns_count: number;
  created_at: Date,
  experience: number,
  followers_count: number,
  id: number,
  password: string,
  person_id: number,
  recommendations_count: number,
  status: Status,
  updated_at: Date,
  username: string,
}

interface ISignIn {
  username: string;
  password: string;
}

interface IAuthState {
  user: User;
  token: string;
}

interface IAuthContext {
  user: User;
  signIn(credentials: ISignIn): Promise<void>;
  signOut(): void;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<IAuthState>({} as IAuthState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [ token, user ] = await AsyncStorage.multiGet([
        '@Ahazo:token',
        '@Ahazo:user'
      ])

      console.log(token, user);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setUserData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setIsLoading(false);
    }

    loadStorageData();
  }, [])

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/api/session', {
      username,
      password
    });
    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@Ahazo:token', token],
      ['@Ahazo:user', JSON.stringify(user)],  
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUserData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@Ahazo:token',
      '@Ahazo:user'
    ]);

    setUserData({} as IAuthState);
  }, []);


  return (
    <AuthContext.Provider value={{
      user: userData,
      isLoading,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): IAuthContext {
	const context = useContext(AuthContext);

	if (!context){
		throw new Error ('useAuth must be used within an AuthProvider');
	}

	return context;
}

export default AuthProvider;
