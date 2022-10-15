import MaskedView from '@react-native-community/masked-view';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import Input from '../../../../../components/Input';
import NavBar from '../../../../../components/NavBar';
import colors from '../../../../../styles/colors';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import * as yup from 'yup';

import { Content, Container, FormContainer } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../../../context/auth';
import { height } from '../../../../../constants';
import Button from '../../../../../components/Button';
import api from '../../../../../services/api';

const EditProfile = () => {
	const profileEditionSchema = yup.object().shape({
		username: yup.string().trim().min(5).required(),
		description: yup.string().nullable(),
		first_name: yup.string().required(),
		last_name: yup.string().required(),
		email: yup
		.string()
		.trim()
		.email('Digite um email válido')
		.required('Campo Obrigatório')
		.lowercase(),
	});
	
	const {
		control,
		handleSubmit,
		formState: { errors, isDirty }
	} = useForm({
		resolver: yupResolver(profileEditionSchema)
	});
		
	const { user, setIsLoading } = useAuth();
	const isFormEdited = isDirty;

	const onSubmit = (data: any) => {
		setIsLoading(true);
		api.put(`/users/${user.id}`, data).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error, error.message);
		});
		setIsLoading(false);

		// TODO: handle success
	}

	return (
		<>
			<NavBar
				name='Edição de Perfil'
			/>

			<Content
				showsVerticalScrollIndicator={false}
			>
				<Container>
					<MaskedView
						style={{
							width: height * 0.125,
							height: height * 0.125,
							alignItems: 'center'
						}}
						maskElement={
							<SquircleView
								style={StyleSheet.absoluteFill}
								squircleParams={{
									cornerRadius: 37,
									cornerSmoothing: 1,
								}}
							/>
						}
					>
						<Image
							source={{
								uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg"
							}}
							style={StyleSheet.absoluteFill}
						/>
						<View
							style={{
								position: 'absolute',
								bottom: 0,
								height: '25%',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: `${colors.black}AA`,
							}}
						>
							<Text
								style={{
									color: colors.offWhite,
									fontSize: fontSizes.subText,
									fontFamily: fonts.text,
								}}
							>
								Editar
							</Text>
						</View>
					</MaskedView>

					<FormContainer>
						<Controller
							control={control} 
							render={({field: {onChange, value}}) => (
								<Input
									placeholder='Primeiro Nome'

									inputField="first_name"
									inputValue={value}
									inputMaskChange={(value: string) => onChange(value)}
									
									iconName="user"
									iconColor={colors.body_light}
									iconSize={20}
			
									errors={errors}
									autoCapitalize="none"
								/>
							)}
							name="first_name"
							defaultValue={user.first_name}
						/>

						<Controller
							control={control} 
							render={({field: {onChange, value}}) => (
								<Input
									placeholder='Último Nome'

									inputField="last_name"
									inputValue={value}
									inputMaskChange={(value: string) => onChange(value)}
									
									iconName="user"
									iconColor={colors.body_light}
									iconSize={20}
			
									errors={errors}
									autoCapitalize="none"
								/>
							)}
							name="last_name"
							defaultValue={user.last_name}
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
							defaultValue={user.email}
						/>

						<Controller
							control={control} 
							render={({field: {onChange, value}}) => (
								<Input
									placeholder='Usuário'

									inputField="username"
									inputValue={value}
									inputMaskChange={(value: string) => onChange(value)}

									iconName="at-sign"
									iconColor={colors.body_light}
									iconSize={20}

									errors={errors}
									autoCapitalize="none"
								/>
							)}
							name="username"
							defaultValue={user.username}
						/>

						<Controller
							control={control} 
							render={({field: {onChange, value}}) => (
								<Input
									placeholder='Descrição'
									isMultiline

									inputField="description"
									inputValue={value}
									inputMaskChange={(value: string) => onChange(value === "" ? null : value)}

									iconName="edit"
									iconColor={colors.body_light}
									iconSize={20}
			
									errors={errors}
									autoCapitalize="none"
								/>
							)}
							name="description"
							defaultValue={user.description}
						/>
						<Button text='Salvar' containerButtonStyle={{ marginTop: height * 0.025}} disabled={!isFormEdited} onPress={handleSubmit(onSubmit)}/>
					</FormContainer>
				</Container>
			</Content>
		</>
	)
}

export default EditProfile;