import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'

import AppProvider from './src/context/index';
import Routes from './src/routes';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!isFontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <>
        <NavigationContainer>
          <AppProvider>
            <Routes/>
            <StatusBar style="dark" />
          </AppProvider>
        </NavigationContainer>
      </>
    );
  }
}
