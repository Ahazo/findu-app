import React, { useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  // useEffect(() => {
  //   async function removeAllLocalStorage() {
  //     await AsyncStorage.multiRemove([
  //       '@Ahazo:token',
  //       '@Ahazo:user'
  //     ]);
  //   }

  //   removeAllLocalStorage();
  // }, []);

  if (!isFontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <>
        <NavigationContainer>
          <AppProvider>
            <Routes/>
            <StatusBar style="light" />
          </AppProvider>
        </NavigationContainer>
      </>
    );
  }
}
