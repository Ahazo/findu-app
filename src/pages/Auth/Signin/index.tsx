import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Toast from 'react-native-toast-message';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ColoredHeader from '../../../components/ColoredHeader';
import Header from '../../../components/Header';

import { useAuth } from '../../../context/auth';

import { height } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { SquircleView } from 'react-native-figma-squircle';

type FormDataType = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required('Campo Obrigatório'),
  password: yup
    .string()
    .required('Campo Obrigatório')
    .min(5, 'Senha no mínimo com 5 caracteres'),
});

export const SignIn = () => {
  const navigation = useNavigation();
  const { signIn, userToken } = useAuth();

  const [hasError, setHasError] = useState(false);
  const [error, setErrorMessage] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    if (hasError) {
      Toast.show({
        type: 'error',
        text1: 'Opa :(',
        text2: error
      })
    }
  }, [hasError])

  async function onSubmit(data: FormDataType) {
    await signIn({
      username: data.username,
      password: data.password,
    });

    if (!userToken) {
      setHasError(true);
      setErrorMessage('Usuario e/ou Senha incorretos')
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Toast ref={(ref) => Toast.setRef(ref)}/>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <ColoredHeader
              logoDimensions={{ height: height * 0.2 }}
              heightPercentage={height * 0.45}
              contentStyle={{
                marginTop: height * 0.05,
              }}
              position="flex-start"
            />
            <View style={styles.contentContainer}>
              <SquircleView
								squircleParams={{
									cornerRadius: 30,
									cornerSmoothing: 1,
									fillColor: colors.white
								}}
								style={styles.formContainer}
							>
                <Text style={styles.title}>Vamos lá!</Text>
                <Text style={styles.subtitle}>
                  Entre com seus dados ou crie uma conta
                </Text>
                <View style={styles.inputContainer}>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        autoCapitalize="none"
                        iconSize={24}
                        iconName="user"
                        inputField="username"
                        iconColor={colors.body_light}
                        placeholder="Usuário"
                        inputValue={value}
                        errors={errors}
                        inputMaskChange={(value: string) => onChange(value)}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                      />
                    )}
                    name="username"
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
                        inputMaskChange={(value: string) => onChange(value)}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit(onSubmit)}
                      />
                    )}
                    name="password"
                    defaultValue=""
                  />
                </View>
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>
                    esqueceu sua senha?
                  </Text>
                </TouchableOpacity>

                <Button
                  text="ENTRAR"
                  onPress={handleSubmit(onSubmit)}
                  containerButtonStyle={{
                    marginTop: Dimensions.get('window').height * 0.02,
                  }}
                />
              </SquircleView>

              <View style={styles.singupContainer}>
                <Text style={styles.singupTitle}>Ainda não tem uma conta?</Text>
                <TouchableOpacity
                  style={styles.singupButton}
                  onPress={() => navigation.navigate('SignUp')}
                >
                  <Text style={styles.signupSubtitle}>
                    Cadastre Gratuitamente
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -height * 0.2,
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.85,
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
  singupContainer: {
    marginTop: 50,
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
