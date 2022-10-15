import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Profile } from '../pages/App/Profile';
import SettingsMenu from '../pages/App/Profile/Settings';
import EditProfile from '../pages/App/Profile/Settings/EditProfile';
import Freelancer from '../pages/App/Profile/Settings/Freelancer';

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
      <App.Screen name='Profile' component={Profile} />
			<App.Screen name='SettingsMenu' component={SettingsMenu} />
			<App.Screen name='EditProfile' component={EditProfile}/>
			<App.Screen name='Freelancer' component={Freelancer}/>
    </App.Navigator>
  );
}
