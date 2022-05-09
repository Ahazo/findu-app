import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import { BundleItem, InfoContainer } from './styles';

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

const Bundle = ({bundles, isPrivate}: IBundleProps) => {
	return (
		<ScrollView
			horizontal
			style={{
				paddingRight: width * 0.125,
				paddingLeft: width * 0.125,
				paddingBottom: height * 0.05
			}}
		>
			{isPrivate &&
				<BundleItem
					squircleParams={{
						cornerSmoothing: 1,
						cornerRadius: 25,
						fillColor: colors.offWhite,
					}}
				>
					<Feather
						name="plus"
						size={height * 0.04}
						color={colors.purple_light}
					/>
					<InfoContainer
						squircleParams={{
							cornerSmoothing: 1,
							cornerRadius: 25,
							fillColor: colors.purple,
						}}
					>
						<Text
							style={{
								color: colors.white
							}}
						>Pacote</Text>
					</InfoContainer>
				</BundleItem>
			}
			
		</ScrollView>
	);
}

export default Bundle;