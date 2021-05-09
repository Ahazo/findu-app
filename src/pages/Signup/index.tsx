import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text, 
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Header } from '../../components/Header';
import { height, width } from '../../constants';
import Input from '../../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

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
        <ScrollView style={{flex: 1}}>
          <View style={styles.afterHeader}>
          <Text style={styles.welcomeText}> 
            
            Vai ser um AHAZO! 

          </Text>
          </View>
          <View style={styles.subHeader}>
          <Text style={styles.subWelcomeText}> 
            
            Preencha os campos para finalizar o seu cadastro

          </Text>
          </View>
          <View style={styles.startForm}>
          <Text style={styles.textStartForm}> 
            
            Informações de usuário

          </Text>
          </View>
         
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={24}
                    iconName="mail"
                    inputField="text"
                    iconColor={colors.body_light}
                    placeholder="Email"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType = "emailAddress"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="email"
                defaultValue=""
              />
               
          </View>
          <View style={styles.componentField}>
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
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="password"
                defaultValue=""
              />
               
          </View>
          <View style={styles.componentField}>
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
                    placeholder="Repita a senha"
                    inputValue={value}
                    secureTextEntry 
                    errors={errors}
                    textContentType="password"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="repeat-password"
                defaultValue=""
              />
               
          </View>
          
          
          <View style={styles.secondForm}>
          <Text style={styles.textSecondForm}> 
            
              Meus Dados

          </Text>
          </View>
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={0}
                    // iconName="mail"
                    inputField="text"
                    iconColor={colors.body_light}
                    placeholder="Nome"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="name"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="name"
                defaultValue=""
              />
          </View>
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={0}
                    // iconName="mail"
                    inputField="text"
                    iconColor={colors.body_light}
                    placeholder="Sobrenome"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="middleName"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="name"
                defaultValue=""
              />
          </View>
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={0}
                    // iconName="mail"
                    inputField="text"
                    iconColor={colors.body_light}
                    placeholder="Gênero"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    // textContentType="z"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="name"
                defaultValue=""
              />
          </View>
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={0}
                    // iconName="mail"
                    inputField="number"
                    iconColor={colors.body_light}
                    placeholder="Celular"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="telephoneNumber"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="name"
                defaultValue=""
              />
          </View>
          <View style={styles.componentField}>
          <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    ref={passwordRef}
                    autoCapitalize="none"
                    iconSize={0}
                    // iconName="mail"
                    inputField="number"
                    iconColor={colors.body_light}
                    placeholder="CPF"
                    inputValue={value}
                    secureTextEntry
                    errors={errors}
                    textContentType="creditCardNumber"
                    onChangeText={value => onChange(value)}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit(onSubmit)}
                  />
                )}
                name="name"
                defaultValue=""
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

  afterHeader: {
    flex: 1,
    paddingTop: 185,
  }, 

  welcomeText: {
    flex: 1,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    paddingRight: 100,
  }, 

  subHeader: {
    flex: 1,
  }, 

  subWelcomeText: {
    color: colors.body_light,
    fontFamily: fonts.heading,
    fontSize: 12,
    paddingLeft: 50,
  },

  startForm: {
    flex: 1,
    paddingTop: 16,
  }, 

  textStartForm: {
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 16,
    paddingRight: 120,
  }, 

  componentField: {
    width: 325,
    marginLeft: 30,
  },

  secondForm: {
    flex: 1,
  },
  
  textSecondForm: {
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.extrabold,
    fontSize: 16,
    paddingRight: 200,
    paddingTop: 30,
  },



})