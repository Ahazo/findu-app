import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

import { Feather } from '@expo/vector-icons'; 

import ahazoLogo from '../assets/ahazowhite.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function SignIn() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <LinearGradient
          colors={[colors.purple, colors.blue_light]}
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
        />
        <Image
          source={ahazoLogo}
          resizeMode='contain'
          style={styles.logo}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Vamos lá!
          </Text>
          <Text style={styles.subtitle}>
            Entre com seus dados ou crie uma conta.
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.formInputContainer}>
              <Feather name='user' size={24} color={colors.body_light}/>
              <TextInput style={styles.formInput} placeholder='Usuário'/>
            </View>
            <View style={styles.formInputContainer}>
              <Feather name='lock' size={24} color={colors.body_light}/>
              <TextInput style={styles.formInput} placeholder='Senha' secureTextEntry={true}/>
            </View>
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              esqueci minha senha
            </Text>
          </TouchableOpacity>
          <LinearGradient
            colors={[colors.purple, colors.blue_light]}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.buttonBackground}
          >
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.buttonText}>
                ENTRAR
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.singupContainer}>
          <Text style={styles.singupTitle}>
            Ainda não tem uma conta?
          </Text>
          <TouchableOpacity style={styles.singupButton} onPress={() => navigation.navigate('SingUp')}>
            <Text style={styles.signupSubtitle}>
              Cadastre Gratuitamente
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
  backgroundContainer: {
    flex: 1,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    marginTop: Dimensions.get('window').height * 0.13,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.48,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    justifyContent: 'flex-start',
    padding: 30,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    marginTop: 20,
    letterSpacing: 1,
  },
  subtitle: {
    color: colors.body_light,
    fontFamily: fonts.heading,
    fontSize: 14
  },
  inputContainer: {
    marginTop: 15
  },
  formInputContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: colors.grey,
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  formInput: {
    color: colors.body,
    width: '80%',
    height: '80%',
  },
  forgotPassword: {
    padding: 10,
    width: '60%',
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.body_light,
    fontFamily: fonts.text,
  },
  buttonBackground: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.get('screen').height * 0.02,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 16,
    letterSpacing: 1,
  },
  singupContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singupTitle: {
    color: colors.body_light,
  },
  singupButton: {
    paddingVertical: 10,
    paddingHorizontal: 70,
  },
  signupSubtitle: {
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 22,
  },
})