import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text, 
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type FormDataType = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Campo Obrigatório'),
  password: yup
    .string()
    .required('Campo Obrigatório')
    .min(6, 'Senha no mínimo com 6 caracteres'),
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

  function onSubmit(data: FormDataType) {
    console.log(data);
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header heightPercentage={20} hasBackButton={true} />
        <ScrollView style={styles.container}>
          <View style={styles.introductionContent}>
            <Text style={styles.title}> 
              Vai ser um AHAZO! 
            </Text>
            <Text style={styles.subtitle}> 
              Preencha os campos para finalizar o seu cadastro
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.formIntro}> 
              Informações de usuário
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="at-sign"
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="Usuário"
                  inputValue={value}
                  errors={errors}
                  textContentType = "username"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
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
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="Senha"
                  inputValue={value}
                  secureTextEntry
                  errors={errors}
                  textContentType="password"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                />
              )}
              name="password"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  // ref={passwordConfirmRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="lock"
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="Repita a senha"
                  inputValue={value}
                  secureTextEntry 
                  errors={errors}
                  textContentType="password"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                />
              )}
              name="passwordConfirm"
              defaultValue=""
            />
          <Text style={styles.formIntro}> 
              Meus Dados
          </Text>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  // ref={mailRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="mail"
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="E-mail"
                  inputValue={value}
                  secureTextEntry
                  errors={errors}
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                  textContentType="emailAddress"
                />
              )}
              name="email"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  // ref={nameRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="user"
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="Nome"
                  inputValue={value}
                  errors={errors}
                  textContentType="name"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"                  />
              )}
              name="name"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  // ref={lastNameRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="users"
                  inputField="text"
                  iconColor={colors.body_light}
                  placeholder="Sobrenome"
                  inputValue={value}
                  errors={errors}
                  textContentType="middleName"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                />
              )}
              name="lastName"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={passwordRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="smartphone"
                  inputField="cellphoneNumber"
                  iconColor={colors.body_light}
                  placeholder="Celular"
                  inputValue={value}
                  errors={errors}
                  textContentType="telephoneNumber"
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
              )}
              name="cellphoneNumber"
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  ref={passwordRef}
                  autoCapitalize="none"
                  iconSize={24}
                  iconName="file-text"
                  inputField="number"
                  iconColor={colors.body_light}
                  placeholder="CPF"
                  inputValue={value}
                  errors={errors}
                  onChangeText={value => onChange(value)}
                  returnKeyType="next"
                />
              )}
              name="cpf"
              defaultValue=""
            />
          </View> 
          <Button text="CADASTRAR"/>
        </ScrollView>
      </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 30,
    zIndex: -1,
    marginTop: Dimensions.get('window').height * 0.125,
    marginBottom: 10,
  },
  introductionContent: {
    paddingVertical: 10,
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
  },
  formIntro: {
    paddingTop: 15,
    fontFamily: fonts.semibold,
    color: colors.body_light,
    fontSize: 18,
  },
})