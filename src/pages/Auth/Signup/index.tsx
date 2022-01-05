import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
	SafeAreaView,
	Platform,
	StatusBar,
	View
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../../components/Input';
import colors from '../../../styles/colors';
import { useStepper } from '../../../context/stepper';
import Personal from './Steps/Personal';

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
	const { currentStepIndex, steps, isLoading } = useStepper();
	
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
    <SafeAreaView style={styles.androidSafeAreaView}>
			<View style={styles.container}>
				{/* <Stepper
					currentStep={currentStepIndex}
					steps={steps}
				/> */}

				{currentStepIndex === 0 &&
					<Personal/>
				} 
{/* 
				{currentStepIndex === 1 &&
					<Address/>
				}

				{currentStepIndex === 2 &&
					<Login/>
				} */}

			</View>
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	androidSafeAreaView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
	container: {
		flex: 1,
		padding: 15,
	}
});
