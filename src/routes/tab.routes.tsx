import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../pages/App/Dashboard';
import { Explorer } from '../pages/App/Explorer';
import { Profile } from '../pages/App/Profile';

import colors from '../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { height, width } from '../constants';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
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
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
    >
        <Tab.Screen name='Dashboard' component={Dashboard} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.firstContainer}>
              <Feather name="home" size={24} color={focused ? colors.purple_dark : colors.body_light}/>
            </View>
          )
        }}/>
        <Tab.Screen name='Explorer' component={Explorer} options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.middleContainer, styles.shadow]}>
              <LinearGradient 
                colors={[colors.purple, colors.blue_light]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, borderRadius: 25,}}
              />
              <Feather name="search" size={24} color={colors.white }/>
            </View>
          )
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.thirdContainer}>
              <Feather name="user" size={24} color={focused ? colors.purple_dark : colors.body_light}/>
            </View>
          )
        }}/>
      </Tab.Navigator>  
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: 90,
    paddingBottom: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    width: width * 0.2,
    height: height * 0.1,
    marginLeft: 30,
  },
  middleContainer: {
    padding: 10,
    bottom: 15,
    width: width * 0.18,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  thirdContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    width: width * 0.23,
    height: height * 0.1,
    marginRight: 30,
  },
  shadow: {
    shadowColor: colors.body,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
})