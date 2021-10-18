import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ColoredHeader from '../../../components/ColoredHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { height } from '../../../constants';
import { CellphoneMask, CPFMask } from '../../../utils/mask';


type FormDataType = {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
  lastName: string;
  cellphoneNumber: string;
  cpf: string;
};

const schema = yup.object().shape({
  username: yup.string().trim().required('Campo Obrigatório'),
  password: yup
    .string()
    .trim()
    .required('Campo Obrigatório')
    .min(6, 'Senha no mínimo com 6 caracteres'),
  passwordConfirm: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], 'Senhas não são iguais')
    .required('Campo Obrigatório'),
  email: yup
    .string()
    .trim()
    .email('Digite um email válido')
    .required('Campo Obrigatório'),
  name: yup.string().trim().required('Campo Obrigatório'),
  lastName: yup.string().trim().required('Campo Obrigatório'),
  cellphoneNumber: yup
    .string()
    .min(
      14,
      'Talvez você tenha esquecido o DDD ou algum dígito. Ex.:21 99999-9999',
    )
    .required('Campo Obrigatório'),

  cpf: yup
    .string()
    .min(14, 'Talvez você tenha esquecido algum dígito. Ex.:999.999.999-99')
    .required('Campo Obrigatório'),
});

export function SignUp() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const mailRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const cellphoneNumberRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);

  function onSubmit(data: FormDataType) {
    console.log(data);
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <ColoredHeader
            heightPercentage={height * 0.2}
            logoDimensions={{ height: height * 0.07 }}
            position="flex-end"
            hasBackButton
            backButtonFakeStyle={{
              position: 'absolute',
              top: '65%',
              left: 20,
            }}
            contentStyle={{
              marginBottom: height * 0.07,
            }}
          />
          <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View style={styles.introductionContent}>
              <Text style={styles.title}>Vai ser um AHAZO!</Text>
              <Text style={styles.subtitle}>
                Preencha os campos para finalizar o seu cadastro
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.formIntro}>Informações de usuário</Text>
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
                    textContentType="username"
                    keyboardType="default"
                    onChangeText={value => onChange(value)}
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
                    keyboardType="default"
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                  />
                )}
                name="password"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordConfirmRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="lock"
                    inputField="passwordConfirm"
                    iconColor={colors.body_light}
                    placeholder="Repita a senha"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="password"
                    keyboardType="default"
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    onSubmitEditing={() => mailRef.current?.focus()}
                  />
                )}
                name="passwordConfirm"
                defaultValue=""
              />
              <Text style={styles.formIntro}>Meus Dados</Text>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={mailRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="mail"
                    inputField="email"
                    iconColor={colors.body_light}
                    placeholder="E-mail"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onSubmitEditing={() => nameRef.current?.focus()}
                  />
                )}
                name="email"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={nameRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="user"
                    inputField="name"
                    iconColor={colors.body_light}
                    placeholder="Nome"
                    inputValue={value}
                    errors={errors}
                    textContentType="name"
                    keyboardType="default"
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    onSubmitEditing={() => lastNameRef.current?.focus()}
                  />
                )}
                name="name"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={lastNameRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="users"
                    inputField="lastName"
                    iconColor={colors.body_light}
                    placeholder="Sobrenome"
                    inputValue={value}
                    errors={errors}
                    textContentType="middleName"
                    keyboardType="default"
                    onChangeText={value => onChange(value)}
                    returnKeyType="next"
                    onSubmitEditing={() => cellphoneNumberRef.current?.focus()}
                  />
                )}
                name="lastName"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={cellphoneNumberRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="smartphone"
                    inputField="cellphoneNumber"
                    iconColor={colors.body_light}
                    placeholder="Celular"
                    inputValue={value}
                    errors={errors}
                    textContentType="telephoneNumber"
                    keyboardType="phone-pad"
                    onChangeText={value => onChange(CellphoneMask(value))}
                    maxLength={14}
                    returnKeyType="next"
                    onSubmitEditing={() => cpfRef.current?.focus()}
                  />
                )}
                name="cellphoneNumber"
                defaultValue=""
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={cpfRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="file-text"
                    inputField="cpf"
                    iconColor={colors.body_light}
                    placeholder="CPF"
                    textContentType="postalCode"
                    keyboardType="number-pad"
                    maxLength={14}
                    inputValue={value}
                    errors={errors}
                    onChangeText={value => onChange(CPFMask(value))}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="cpf"
                defaultValue=""
              />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Button text="CADASTRAR" onPress={handleSubmit(onSubmit)} />
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
  introductionContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 22,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: fonts.text,
    color: colors.body,
    fontSize: 16,
  },
  formContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  formIntro: {
    paddingTop: 15,
    fontFamily: fonts.semibold,
    color: colors.body_light,
    fontSize: 18,
  },
});
