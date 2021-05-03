import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'

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
      <Routes/>
    );
  }
}
