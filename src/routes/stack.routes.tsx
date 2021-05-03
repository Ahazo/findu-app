import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' 

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { Onboarding } from '../pages/Onboarding';

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
    </stackRoutes.Navigator>
)

export default AppRoutes;
