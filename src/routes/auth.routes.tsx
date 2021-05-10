import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SignIn } from '../pages/Signin'
import { SignUp } from '../pages/Signup'
import { Dashboard } from '../pages/Dashboard';
import { Welcome } from '../pages/Welcome';
import { Onboarding } from '../pages/Onboarding';
import colors from '../styles/colors';


const Auth = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      initialRouteName='Welcome'
      headerMode='none'
      screenOptions={{
          cardStyle: {
              backgroundColor: colors.white
          },
      }}
    >
      <Auth.Screen name='Welcome' component={Welcome} />
      <Auth.Screen name='Onboarding' component={Onboarding} />

      <Auth.Screen name='SignIn' component={SignIn} />
      <Auth.Screen name='SignUp' component={SignUp} />
    </Auth.Navigator>
  );
} 