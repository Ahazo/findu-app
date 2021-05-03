import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' 

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { Onboarding } from '../pages/Onboarding';
import { SignIn } from '../pages/Signin';
import { Dashboard } from '../pages/Dashboard';
import { SignUp } from '../pages/SignUp';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        initialRouteName='Welcome'
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen 
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen
          name='Onboarding'
          component={Onboarding}
        />

        <stackRoutes.Screen
          name='SingIn'
          component={SignIn}
        />

        <stackRoutes.Screen
          name='SingUp'
          component={SignUp}
        />

        <stackRoutes.Screen
          name='Dashboard'
          component={Dashboard}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;
