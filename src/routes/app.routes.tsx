import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../pages/App/Dashboard';
import { Explorer } from '../pages/App/Explorer';
import { Profile } from '../pages/App/Profile';

import colors from '../styles/colors';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          backgroundColor: colors.white,
          height: 90,
          paddingBottom: 40,
        }
      }}
    >
        <Tab.Screen name='Home' component={Dashboard} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Feather name="home" size={30} color={focused ? colors.purple_dark : colors.body_light}/>
            </View>
          )
        }}/>
        <Tab.Screen name='Explorer' component={Explorer} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Feather name="search" size={30} color={focused ? colors.purple_dark : colors.body_light}/>
            </View>
          )
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Feather name="user" size={30} color={focused ? colors.purple_dark : colors.body_light}/>
            </View>
          )
        }}/>
      </Tab.Navigator>  
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
})