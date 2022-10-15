import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import { BundleContent, BundleTitle, ButtonContainer, ButtonLabel, CallToAction, CategoryContainer, CTAButtonContainer, InfoContainer, InfoContent, PackageLabel } from './styles';

export interface IBundle {
	id: string;
	title: string;
	skill: string;
	images: string[];
}

interface IBundleProps {
	bundles: IBundle[];
	isPrivate: boolean;
}

interface IBundleItemProps {
	isPrivate?: boolean;
	title: string;
	area?: string;
	skill?: string;
	bundleId?: string;
}

const BundleItem = ({isPrivate = false, title, area, skill, bundleId}: IBundleItemProps) => {
	const category = area && skill ? `${area} | ${skill}` : "";
	
	return (
		<ButtonContainer onPress={() => {
		}}>
			<BundleContent
				squircleParams={{
					cornerSmoothing: 1,
					cornerRadius: 25,
					fillColor: isPrivate ? colors.white : 'olivedrab',
				}}
			>
				{isPrivate &&
					<Feather
						name="plus"
						size={height * 0.04}
						color={colors.purple}
						style={{
							position: 'relative',
							top: height * 0.12,
						}}
					/>
				}
				<InfoContainer
					squircleParams={{
						cornerSmoothing: 1,
						cornerRadius: 25,
						fillColor: isPrivate ? colors.purple : colors.white,
					}}
				>
					<InfoContent>
						<PackageLabel
							style={{
								color: isPrivate ? colors.white : colors.body,
							}}
						>
							Pacote
						</PackageLabel>
						<BundleTitle
							style={{
								color: isPrivate ? colors.white : colors.body,
							}}
						>
							{title}
						</BundleTitle>
						<CategoryContainer>
							<Text
								style={{
									color: isPrivate ? colors.white : colors.body,
								}}
							>
								{category}
							</Text>
						</CategoryContainer>
					</InfoContent>
					{!isPrivate &&
						<CTAButtonContainer>
							<CallToAction
								squircleParams={{
									cornerRadius: 10,
									cornerSmoothing: 1,
									fillColor: colors.purple,
								}}
							>
								<ButtonLabel
									style={{
										color: colors.white
									}}
								>
									Ver Mais
								</ButtonLabel>
							</CallToAction>
						</CTAButtonContainer>
					}
				</InfoContainer>
			</BundleContent>
		</ButtonContainer>
	);
}

const Bundle = ({bundles, isPrivate}: IBundleProps) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{
				paddingBottom: height * 0.05,
				paddingLeft: width * 0.125,
			}}
			contentInset={{
				right: width * 0.125,
				top: 0,
				bottom: 0,
				left: 0,
			}}
		>
			{isPrivate &&
				<BundleItem title='Crie um novo pacote' isPrivate/>
			}
			{bundles.map((bundle, index) => (
				<BundleItem
					key={index}
					title={bundle.title}
					area={bundle.area}
					skill={bundle.skill}
					bundleId={`${bundle.id}`}
				/>
			))}
		</ScrollView>
	);
}

export default Bundle;