import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions } from 'react-native';

import * as yup from 'yup';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import colors from '../../../../../styles/colors';

import { Container } from './styles';

interface IPersonalData {
	cpf: string;
	email: string;
	cellphone_number: string;
	birth_date: string;
	first_name: string;
	last_name: string;
}

const personalSchema = yup.object().shape({
	first_name: yup.string().required("Campo Obrigatório"),
	last_name: yup.string().required("Campo Obrigatório"),
	email: yup.string().email().required("Campo Obrigatório"),
	cellphone_number: yup.string().required("Campo Obrigatório"),
	cpf: yup.string().min(11).required("Campo Obrigatório"),
	birth_date: yup.date().required("Campo Obrigatório")
});

const Personal = () => {
	const { 
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(personalSchema)
	});

	const onSubmit = (data: any) => {
		console.log(data);
	}

	return (
		<Container>
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
						onChangeText={value => onChange(value)}
						returnKeyType="next"
					/>
				)}
				name="username"
				defaultValue=""
			/>

			<Button
				text="ENTRAR"
				onPress={handleSubmit(onSubmit)}
				containerButtonStyle={{
					marginTop: Dimensions.get('window').height * 0.02,
				}}
			/>
		</Container>
	)
}

export default Personal;