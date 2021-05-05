import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.purple, colors.blue_light]}
        style={styles.background}
      />
      <View style={styles.wrapper}>
        <Image
          source={{uri: 'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo-logo-white.png'}}
          resizeMode='contain'
          style={styles.logo}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
            <Text style={styles.buttonText}>
              USUÁRIO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
            <Text style={styles.buttonText}>
              LOJA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.2,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 15,
    width: Dimensions.get('window').width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
  }
})