import React from 'react';
import { SafeAreaView, View, Text, Platform, StatusBar } from 'react-native';

import Header from '../../../components/Header';
import colors from '../../../styles/colors';

export function Dashboard() {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.white,
      }}
    >
      <Header />
    </SafeAreaView>
  );
}
