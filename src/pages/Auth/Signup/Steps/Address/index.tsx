import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Keyboard, Text } from 'react-native';
import * as yup from 'yup';
import Input from '../../../../../components/Input';
import { Container } from '../styles';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import colors from '../../../../../styles/colors';
import cepSearch from 'cep-promise'
import { useStepper } from '../../../../../context/stepper';
import Button from '../../../../../components/Button';

const personalSchema = yup.object().shape({
	street: yup.string().required("Campo Obrigatório"),
	number: yup.string().required("Campo Obrigatório"),
	neighborhood: yup.string().required('Campo Obrigatório'),
	state: yup
		.string()
		.min(
			2,
			'Ex: SP',
		)
		.max(
			2,
			'Ex: SP',
		)
		.required('Campo Obrigatório'),
	city: yup.string().required('Campo Obrigatório'),
});

const Address = () => {
	const [cep, setCEP] = useState("");
	const [showFields, setShowFields] = useState(false);

	const {
		control,
		setValue,
		handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });
	
	const {
		addressData,
		setAddressData,
		handleNextStep,
		setIsLoading,
	} = useStepper();


	const onSubmit = (data: any) => {
		setAddressData({
			...data,
			postal_code: cep
		});
		handleNextStep();
	}

	useEffect(() => {
		let handledCep = cep.replace("-", "");

		if (handledCep.length === 8) {
			Keyboard.dismiss();
			setIsLoading(true);
			setValue('number', '');
			
			const searchCepAndApplyData = async () => {
				await cepSearch(handledCep)
					.then((data: any) => {
						setValue('city', data.city);
						setValue('state', data.state);
						setValue('street', data.street);
						setValue('neighborhood', data.neighborhood);
						setShowFields(true);
					});
			}	
			searchCepAndApplyData();
			setIsLoading(false);
		} else if (showFields) setShowFields(false);
	}, [cep]);


	useEffect(() => {
		if (addressData) {
			Object.entries(addressData).forEach((field) => {
				const name = field[0];
				const value = field[1];
				
				if (name === 'postal_code') {
					setCEP(value);
				} else {
					setValue(name, value);
				}
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
				2. Endereço
			</Text>
			
			<Input
				keyboardType="numeric"
				autoCapitalize="none"
				iconSize={24}
				iconName="map-pin"
				inputField="cep"
				iconColor={colors.body_light}
				placeholder="CEP"
				inputValue={cep}
				errors={errors}
				inputMaskChange={(value: string) => setCEP(value)}
				returnKeyType="next"
				mask='cep'
				maxLength={9}
			/>
			
			{showFields && (
				<>
					<Controller
						control={control}
						render={({field: {onChange, value}}) => (
							<Input
								placeholder="Rua"
	
								inputField="street"
								inputValue={value}
								inputMaskChange={(value: string) => onChange(value)}
		
								errors={errors}
								autoCapitalize="none"
								returnKeyType="next"
							/>
						)}
						name="street"
						defaultValue=""
					/>

					<Controller
						control={control}
						render={({field: {onChange, value}}) => (
							<Input
								placeholder="Numero"
		
								inputField="number"
								inputValue={value}
								inputMaskChange={(value: string) => onChange(value)}
								maxLength={10}
		
								errors={errors}
								autoCapitalize="none"
								returnKeyType="next"
							/>
						)}
						name="number"
						defaultValue=""
					/>

					<Controller
						control={control}
						render={({field: {onChange, value}}) => (
							<Input
								placeholder="Bairro"
		
								inputField="neighborhood"
								inputValue={value}
								inputMaskChange={(value: string) => onChange(value)}
		
								errors={errors}
								autoCapitalize="none"
								returnKeyType="next"
							/>
						)}
						name="neighborhood"
						defaultValue=""
					/>

					<Controller
						control={control}
						render={({field: {onChange, value}}) => (
							<Input
								placeholder="Estado"
		
								inputField="state"
								inputValue={value}
								inputMaskChange={(value: string) => onChange(value)}
								maxLength={2}
		
								errors={errors}
								autoCapitalize="none"
								returnKeyType="next"
							/>
						)}
						name="state"
						defaultValue=""
					/>

					<Controller
						control={control}
						render={({field: {onChange, value}}) => (
							<Input
								placeholder="Cidade"
		
								inputField="city"
								inputValue={value}
								inputMaskChange={(value: string) => onChange(value)}
		
								errors={errors}
								autoCapitalize="none"
								returnKeyType="next"
							/>
						)}
						name="city"
						defaultValue=""
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
				</>
			)}
		</Container>
	)
}

export default Address;