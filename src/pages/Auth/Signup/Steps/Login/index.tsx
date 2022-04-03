import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Text } from 'react-native';

import * as yup from 'yup';
import Input from '../../../../../components/Input';

import { Container } from '../styles';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import colors from '../../../../../styles/colors';
import { useStepper } from '../../../../../context/stepper';
import Button from '../../../../../components/Button';

const personalSchema = yup.object().shape({
	username: yup.string().trim().lowercase().min(5, 'Seu nome de usuario deve conter pelo menos 5 (cinco) digitos.').required("Campo Obrigatório"),
	password: yup.string().trim().min(8, 'Sua senha deve conter pelo menos 8 (oito) digitos.').required("Campo Obrigatório"),
});

const Login = () => {
	const [ready, setReady] = useState(false);

	const {
		loginData,
		setLoginData,
		signUp
	} = useStepper();

	const {
		setValue,
		handleSubmit,
		control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });

	const onSubmit = (data: any) => {
		setLoginData(data);
		setReady(true);
	}

	useEffect(() => {
		if (loginData) {
			Object.entries(loginData).forEach((field) => {
				const name = field[0];
				const value = field[1];

				setValue(name, value);
			});
		}
	}, []);

	useEffect(() => {
		const {username, password} = loginData;
		if (username && password && ready) signUp();
	}, [loginData]);

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
				3. Acesso
			</Text>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						autoCapitalize="none"
						iconSize={24}
						iconName="user"
						inputField="username"
						iconColor={colors.body_light}
						placeholder="Usuario"
						inputValue={value}
						errors={errors}
						inputMaskChange={(value: string) => onChange(value)}
						returnKeyType="next"
					/>
				)}
				name="username"
				defaultValue=""
			/>
			<Controller
				control={control}
				render={({field: {onChange, value}}) => (
					<Input
						autoCapitalize="none"
						secureTextEntry
						iconSize={24}
						iconName="lock"
						inputField="password"
						iconColor={colors.body_light}
						placeholder="Senha"
						inputValue={value}
						errors={errors}
						inputMaskChange={(value: string) => onChange(value)}
						returnKeyType="next"
					/>
				)}
				name="password"
				defaultValue=""
			/>
			<Button
				text="Finalizar"
				onPress={handleSubmit(onSubmit)}
				containerButtonStyle={{
					marginTop: Dimensions.get("window").height * 0.05,
				}}
				buttonStyle={{
					width: Dimensions.get("window").width * 0.7
				}}
			/>
		</Container>
	)
}

export default Login;