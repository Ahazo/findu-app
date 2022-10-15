import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Text } from 'react-native';

import * as yup from 'yup';
import Input from '../../../../../components/Input';

import { Container } from '../styles';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import colors from '../../../../../styles/colors';
import DatePicker from '../../../../../components/DatePicker';
import Button from '../../../../../components/Button';
import { useStepper } from '../../../../../context/stepper';

const personalSchema = yup.object().shape({
	first_name: yup.string().trim().required("Campo Obrigatório"),
	last_name: yup.string().trim().required("Campo Obrigatório"),
	email: yup
		.string()
		.trim()
		.email('Digite um email válido')
		.required('Campo Obrigatório')
		.lowercase(),
	cellphone_number: yup
		.string()
		.min(
			14,
			'Talvez você tenha esquecido o DDD ou algum dígito. Ex.:11 99999-9999',
		)
		.required('Campo Obrigatório'),
	cpf: yup
	.string()
	.min(14, 'Talvez você tenha esquecido algum dígito. Ex.:999.999.999-99')
	.required('Campo Obrigatório'),
	birth_date: yup.date().required("Campo Obrigatório")
});

const Personal = () => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(personalSchema)
	});

	const { 
		isLoading,
		personalData,
		handleNextStep,
		setPersonalData,
	} = useStepper();


	const onSubmit = (data: any) => {
		setPersonalData(data);
		handleNextStep();
	}

	useEffect(() => {
		if (personalData) {
			Object.entries(personalData).forEach((field) => {
				const name = field[0];
				const value = field[1];

				setValue(name, value);
			});
		}
	}, []);

	return (		
		<Container>
			<Text
				style={{
					color: colors.body,
					fontFamily: fonts.semibold,
					fontSize: fontSizes.subTitle,
					marginBottom: 10,
				}}
			>
				1. Informações Pessoais
			</Text>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						iconSize={24}
						iconName="edit-3"
						iconColor={colors.body_light}
						placeholder="Primeiro Nome"

						inputField="first_name"
						inputValue={value}
						inputMaskChange={(value: string) => onChange(value)}

						errors={errors}
						returnKeyType="next"
					/>
				)}
				name="first_name"
				defaultValue=""
			/>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						iconSize={24}
						iconName="edit-3"
						iconColor={colors.body_light}
						placeholder="Sobrenome"

						inputField="last_name"
						inputValue={value}
						inputMaskChange={(value: string) => onChange(value)}

						errors={errors}
						returnKeyType="next"
					/>
				)}
				name="last_name"
				defaultValue=""
			/>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						iconSize={24}
						iconName="mail"
						iconColor={colors.body_light}
						placeholder="E-mail"

						inputField="email"
						inputValue={value}
						inputMaskChange={(value: string) => onChange(value)}

						errors={errors}
						returnKeyType="next"
						autoCapitalize="none"
						keyboardType="email-address"
					/>
				)}
				name="email"
				defaultValue=""
			/>
			
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						iconSize={24}
						iconName="phone"
						iconColor={colors.body_light}
						placeholder="Telefone"

						inputField="cellphone_number"
						inputValue={value}
						inputMaskChange={(value: string) => onChange(value)}
						mask='cellphone'
						
						maxLength={14}
						errors={errors}
						returnKeyType="next"
						autoCapitalize="none"
						keyboardType="numeric"
					/>
				)}
				name="cellphone_number"
				defaultValue=""
			/>
			
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						iconSize={24}
						iconName="file"
						iconColor={colors.body_light}
						placeholder="CPF"

						inputField="cpf"
						inputValue={value}
						inputMaskChange={(value: string) => onChange(value)}
						mask='cpf'
						maxLength={14}

						errors={errors}
						autoCapitalize="none"
						returnKeyType="next"
					/>
				)}
				name="cpf"
				defaultValue=""
			/>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<DatePicker
						inputField="birth_date"
						inputValue={value}
						onChange={(value) => onChange(value)}
						label="Data de nascimento"
						errors={errors}
					/>
				)}
				name="birth_date"
				defaultValue={new Date()}
			/>
			<Button
				text="Proximo"
				onPress={handleSubmit(onSubmit)}
				containerButtonStyle={{
					marginTop: Dimensions.get("window").height * 0.03,
				}}
				buttonStyle={{
					width: Dimensions.get("window").width * 0.7
				}}
			/>
		</Container>
	)
}

export default Personal;