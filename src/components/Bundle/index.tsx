import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { width } from '../../constants';
import colors from '../../styles/colors';
import { BundleCard, BundleListContainer, Container, Description, TipDescription, SubTitle, TipTextContainer, TipTitle, Title, EstimatedTimeContainer, PriceContainer, InfoContainer, InfoText } from './styles';

export interface IBundleItem {
	id: number;
	title: string;
	description: string;
	value: number;
	deadline: number;
	status: boolean;
	images?: string[];
}

interface IBundleProps {
	bundles: IBundleItem[];
	isPrivate: boolean;
}

const Bundle = (props: IBundleProps) => {
	return (
		<Container>
			<SubTitle>Pacotes:</SubTitle>
			<BundleListContainer
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{props.isPrivate && (
						<BundleCard
							style={{
								borderWidth: 2,
								borderColor: colors.purple
							}}
						>
							<TouchableWithoutFeedback
								style={{
									height: "100%",
									justifyContent: 'center',
									alignItems: 'center'
								}}
								onPress={() => {}}
							>
								<Feather
									name="plus"
									size={width * 0.1}
									color={colors.purple}
								/>
								<TipTextContainer>
									<TipTitle>Crie um pacote</TipTitle>
									<TipDescription>Publique um servico no seu perfil e tenha mais visibilidade.</TipDescription>
								</TipTextContainer>
							</TouchableWithoutFeedback>
						</BundleCard>
				)}

				{props.bundles.length > 0 && props.bundles.map(bundle => {
					return (
						<BundleCard
							key={bundle.id}
						>
							<TouchableWithoutFeedback
								style={{
									height: "100%",
									justifyContent: 'flex-start',
									alignItems: 'flex-start',
									paddingVertical: 20,
									paddingHorizontal: 15,
								}}
								onPress={() => {}}
							>
								{bundle.images && (
									<View
										style={{
											height: "40%",
											flexDirection: "row",
											justifyContent: "center",
										}}
									>
										{bundle.images.map((imagePath, index) => {
											return (
												<Image
													key={index}
													source={{ uri: imagePath }}
													style={{
														flex: 1, 
														resizeMode: 'cover',
														margin: 10,
														borderRadius: 15,
													}}
												/>
											)
										})}
									</View>
								)}

								<Title>
									{bundle.title}
								</Title>
								<Description>
									{bundle.description}
								</Description>
								<InfoContainer>
									<EstimatedTimeContainer
										squircleParams={{
											cornerSmoothing: 1,
											cornerRadius: 15,
											fillColor: colors.blue_light,
										}}
									>
										<InfoText>
											{bundle.deadline} dias
										</InfoText>
									</EstimatedTimeContainer>
									<PriceContainer
										squircleParams={{
											cornerSmoothing: 1,
											cornerRadius: 15,
											fillColor: colors.green,
										}}
									>
										<InfoText>R$ {bundle.value.toLocaleString("pt-BR")}</InfoText>
									</PriceContainer>
								</InfoContainer>
							</TouchableWithoutFeedback>
						</BundleCard>
					)
				})}
			</BundleListContainer>
		</Container>
	);
}

export default Bundle;