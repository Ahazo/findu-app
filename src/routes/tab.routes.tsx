import React from 'react';

import { Platform, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../pages/App/Dashboard';
import { Explorer } from '../pages/App/Explorer';
import { Profile } from '../pages/App/Profile';

import colors from '../styles/colors';
import { height, width } from '../constants';
import AppRoutes from './app.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          backgroundColor: Platform.OS === 'ios' ? 'rgba(250, 250, 250, 0.3)' : colors.offWhite,
          height: 70,
          paddingBottom: 40,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.firstContainer}>
              <Feather
                name="home"
                size={24}
                color={focused ? colors.purple_dark : colors.body_light}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.middleContainer}>
              <Feather 
								name="search"
								size={24}
								color={focused ? colors.purple_dark : colors.body_light}
							/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AppRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.thirdContainer}>
              <Feather
                name="user"
                size={24}
                color={focused ? colors.purple_dark : colors.body_light}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: 90,
    paddingBottom: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
		top: 15,
    width: width * 0.2,
    height: height * 0.1,
  },
  thirdContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    width: width * 0.2,
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
    elevation: 5,
  },
});
