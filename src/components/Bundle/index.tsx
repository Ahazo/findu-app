import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { width } from '../../constants';
import colors from '../../styles/colors';
import { BundleCard, BundleListContainer, Container, Description, SubTitle, TipTextContainer, TipTitle, Title } from './styles';

export interface IBundleItem {
	id: number;
	title: string;
	description: string;
	value: number;
	deadline: number;
	status: boolean;
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
							squircleParams={{
								fillColor: "#FEFEFE",
								cornerRadius: 20,
								cornerSmoothing: 1,
								strokeWidth: 2,
								strokeColor: colors.purple
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
									<Description>Publique um servico no seu perfil e tenha mais visibilidade.</Description>
								</TipTextContainer>
							</TouchableWithoutFeedback>
						</BundleCard>
				)}

				{props.bundles.length > 0 && props.bundles.map(bundle => {
					return (
						<BundleCard
							key={bundle.id}
							squircleParams={{
								fillColor: "#EEEEEE",
								cornerRadius: 20,
								cornerSmoothing: 1,
							}}
						>
							<Title>
								{bundle.title}
							</Title>
							<Description>
								{bundle.description}
							</Description>
						</BundleCard>
					)
				})}
			</BundleListContainer>
		</Container>
	);
}

export default Bundle;