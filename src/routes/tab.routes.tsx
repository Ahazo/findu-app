import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../pages/App/Dashboard';
import { Profile } from '../pages/App/Profile';
import { Explorer } from '../pages/App/Explorer';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Dashboard}/>
      <Tab.Screen name='Explorer' component={Explorer}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
}

export default Tabs;