import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import NavBar from '../../../../../components/NavBar';
import { height, width } from '../../../../../constants';
import colors from '../../../../../styles/colors';

import {
	Title
} from './styles';

interface ICreateBundle {
	title: string;
	description: string;
	price: number;
	deadline: number;
}

const bundleCreationSchema = yup.object().shape({
	title: yup.string().required("Campo Obrigatório"),
	description: yup.string().required("Campo Obrigatório"),
	value: yup.number().required(),
	deadline: yup.number().required()
});

const CreateBundle = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [bundleDate, setBundleData] = useState({} as ICreateBundle)

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(bundleCreationSchema)
	})

	const onSubmit = (data: any) => {
		console.log(data);
	}

	useEffect(() => {
		
	}, [])

	return (
		<>
			<NavBar name='Crie seu pacote'/>
			<ScrollView style={{ flex: 1, paddingHorizontal: 0.05 * width, paddingTop: 0.02 * height}}>
				{/* <Title>Crie seu pacote</Title> */}
				<Controller
					control={control}
					render={({field: {onChange, value}}) => (
						<Input
							iconSize={24}
							iconName="edit-3"
							iconColor={colors.body_light}
							placeholder="Titulo do seu pacote"

							inputField="title"
							inputValue={value}
							inputMaskChange={(value: string) => onChange(value)}

							errors={errors}
							returnKeyType="next"
						/>
					)}
					name="title"
					defaultValue=""
				/>

				<Controller
					control={control}
					render={({field: {onChange, value}}) => (
						<Input
							keyboardType="numeric"

							iconSize={24}
							iconName="dollar-sign"
							iconColor={colors.body_light}
							placeholder="Valor do servico"

							inputField="price"
							inputValue={value}
							inputMaskChange={(value: string) => onChange(value)}

							errors={errors}
							returnKeyType="next"
						/>
					)}
					name="price"
					defaultValue=""
				/>

				<Controller
					control={control}
					render={({field: {onChange, value}}) => (
						<Input
							keyboardType="numeric"

							iconSize={24}
							iconName="calendar"
							iconColor={colors.body_light}
							placeholder="Prazo de entrega"

							inputField="deadline"
							inputValue={value}
							inputMaskChange={(value: string) => onChange(value)}

							errors={errors}
							returnKeyType="next"
						/>
					)}
					name="deadline"
					defaultValue=""
				/>

				<Controller
					control={control}
					render={({field: {onChange, value}}) => (
						<Input
							iconSize={24}
							iconName="align-center"
							iconColor={colors.body_light}
							placeholder="Descricao"
							isMultiline

							inputField="description"
							inputValue={value}
							inputMaskChange={(value: string) => onChange(value)}

							errors={errors}
							returnKeyType="next"
						/>
					)}
					name="description"
					defaultValue=""
				/>

				<Button
					text="Salvar"
					onPress={handleSubmit(onSubmit)}
					containerButtonStyle={{
						marginTop: Dimensions.get("window").height * 0.03,
					}}
					buttonStyle={{
						width: Dimensions.get("window").width * 0.7
					}}
				/>
			</ScrollView>
		</>
	);
}

export default CreateBundle;