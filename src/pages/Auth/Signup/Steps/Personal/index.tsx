import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text } from 'react-native';

import * as yup from 'yup';
import Input from '../../../../../components/Input';

import { Container } from '../styles';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import colors from '../../../../../styles/colors';
import DatePicker from '../../../../../components/DatePicker';

const personalSchema = yup.object().shape({
	first_name: yup.string().trim().required("Campo Obrigatório"),
	last_name: yup.string().trim().required("Campo Obrigatório"),
	email: yup
		.string()
		.trim()
		.email('Digite um email válido')
		.required('Campo Obrigatório'),
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
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [cpf, setCpf] = useState("");
	const [birthDate, setBirthDate] = useState(new Date);

	const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });

	const onSubmit = (data: any) => {
		
	}

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
			
			<Input
				autoCapitalize="none"
				iconSize={24}
				iconName="edit-3"
				inputField="first_name"
				iconColor={colors.body_light}
				placeholder="Primeiro Nome"
				inputValue={firstName}
				errors={errors}
				onChangeText={(value) => setFirstName(value)}
				returnKeyType="next"
			/>
			<Input
				autoCapitalize="none"
				iconSize={24}
				iconName="edit-3"
				inputField="last_name"
				iconColor={colors.body_light}
				placeholder="Sobrenome"
				inputValue={lastName}
				errors={errors}
				onChangeText={(value) => setLastName(value)}
				returnKeyType="next"
			/>
			<Input
				keyboardType="email-address"
				autoCapitalize="none"
				iconSize={24}
				iconName="mail"
				inputField="email"
				iconColor={colors.body_light}
				placeholder="E-mail"
				inputValue={email}
				errors={errors}
				onChangeText={(value) => setEmail(value)}
				returnKeyType="next"
			/>
			<Input
				keyboardType="numeric"
				autoCapitalize="none"
				iconSize={24}
				iconName="phone"
				inputField="phone"
				iconColor={colors.body_light}
				placeholder="Telefone"
				inputValue={phone}
				errors={errors}
				onChangeText={(value) => setPhone(value)}
				returnKeyType="next"
			/>
			<Input
				autoCapitalize="none"
				iconSize={24}
				iconName="file"
				inputField="cpf"
				iconColor={colors.body_light}
				placeholder="CPF"
				inputValue={cpf}
				errors={errors}
				onChangeText={(value) => setCpf(value)}
				returnKeyType="next"
			/>
			<DatePicker
				label="Data de nascimento"
			/>
		</Container>
	)
}

export default Personal;