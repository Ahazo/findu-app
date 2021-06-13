import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../pages/Auth/Signin';
import { SignUp } from '../pages/Auth/Signup';
import { Welcome } from '../pages/Auth/Welcome';
import { Onboarding } from '../pages/Auth/Onboarding';

import colors from '../styles/colors';

const Auth = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Auth.Screen name="Welcome" component={Welcome} />
      <Auth.Screen name="Onboarding" component={Onboarding} />

      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}
