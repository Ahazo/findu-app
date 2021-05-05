import React, { useRef, useState } from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import Input from '../components/Input';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormDataType = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),
  password: yup
    .string()
    .required('Campo Obrigatório')
    .min(6, 'Senha no mínimo com 6 caracteres'),
});

export function SignIn() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordRef = useRef<TextInput>(null);

  function onSubmit(data: FormDataType) {
    console.log(data);
  }

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
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <Image
          source={{
            uri:
              'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo-logo-white.png',
          }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.contentContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Vamos lá!</Text>
            <Text style={styles.subtitle}>
              Entre com seus dados ou crie uma conta.
            </Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="user"
                    inputField="email"
                    iconColor={colors.body_light}
                    placeholder="Usuário"
                    inputValue={value}
                    errors={errors}
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                  />
                )}
                name="email"
                defaultValue=""
              />

              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="lock"
                    inputField="password"
                    iconColor={colors.body_light}
                    placeholder="Senha"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="password"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="password"
                defaultValue=""
              />
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>esqueceu sua senha?</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={[colors.purple, colors.blue_light]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonBackground}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.singupContainer}>
            <Text style={styles.singupTitle}>Ainda não tem uma conta?</Text>
            <TouchableOpacity
              style={styles.singupButton}
              onPress={() => navigation.navigate('SingUp')}
            >
              <Text style={styles.signupSubtitle}>Cadastre Gratuitamente</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    marginTop: 30,
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.85,
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
    padding: 20,
    elevation: 10,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    letterSpacing: 1,
    marginTop: 10,
  },
  subtitle: {
    color: colors.body_light,
    fontFamily: fonts.heading,
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 15,
  },
  formInputContainer: {
    width: '100%',
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
    width: '100%',
    height: '100%',
    paddingLeft: 10,
  },
  forgotPassword: {
    paddingVertical: 10,
    paddingLeft: 10,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.body_light,
    fontFamily: fonts.text,
    letterSpacing: 0.2,
  },
  buttonBackground: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.02,
  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.get('window').height * 0.02,
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
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  signupSubtitle: {
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 22,
  },
});
