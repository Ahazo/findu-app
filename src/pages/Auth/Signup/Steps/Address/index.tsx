import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text } from 'react-native';
import * as yup from 'yup';
import Input from '../../../../../components/Input';
import { Container } from '../styles';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import colors from '../../../../../styles/colors';

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

const Address = () => {
	const [cep, setCEP] = useState("");

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
				onChangeText={(value) => setCEP(value)}
				returnKeyType="next"
			/>
			
		</Container>
	)
}

export default Address;