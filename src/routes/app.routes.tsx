import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import CreateBundle from '../pages/App/Profile/Bundle/create';
import { Profile } from '../pages/App/Profile';

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
			initialRouteName='Profile'
    >
      <App.Screen name="Profile" component={Profile} />
      <App.Screen name="BundleCreation" component={CreateBundle} />
    </App.Navigator>
  );
}
