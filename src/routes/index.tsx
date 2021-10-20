import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import TabRoutes from './tab.routes';

import { useAuth } from '../context/auth';
import colors from '../styles/colors';

const Routes: React.FC = () => {
  const { userToken, isLoading, signOut } = useAuth();

  // useEffect(() => signOut(), [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.purple_light} />
      </View>
    );
  }

  return userToken ? <TabRoutes /> : <AuthRoutes />;
};

export default Routes;
