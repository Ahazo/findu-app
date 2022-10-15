import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import TabRoutes from './tab.routes';

import { useAuth } from '../context/auth';
import colors from '../styles/colors';
import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { userToken, isLoading, signOut } = useAuth();

	// useEffect(() => {
  //   signOut()
	// }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  return userToken ? <TabRoutes /> : <AuthRoutes />;
};

export default Routes;
