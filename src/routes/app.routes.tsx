import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../pages/Dashboard';
import colors from '../styles/colors';

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      initialRouteName='Dashboard'
      headerMode='none'
      screenOptions={{
          cardStyle: {
              backgroundColor: colors.white
          },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard}/>
    </App.Navigator>
  );
}
