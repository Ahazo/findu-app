import { Feather } from '@expo/vector-icons';
import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import Button from '../../../../components/Button';
import NavBar from '../../../../components/NavBar';
import { height, width } from '../../../../constants';
import colors from '../../../../styles/colors';
import {
	LabelText,
	MenuItem,
	NameText,
	ProfileContainer
} from './styles';

const SettingsMenu = () => {
	// Edicao de perfil
	// Privacidade
	// Termos de uso
	// Logout

	
	return (
		<>
			<NavBar
				actions={[]}
				name={"Configurações"}
			/>
			<ScrollView
				style={{
					flex: 1
				}}
			>
				<ProfileContainer>
					<MaskedView
						style={{
							width: 85,
							height: 85,
						}}
						maskElement={
							<SquircleView
								style={StyleSheet.absoluteFill}
								squircleParams={{
									cornerRadius: 32,
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
					</MaskedView>
					<NameText>Lucca Scarano</NameText>
					<LabelText>Senior Designer</LabelText>
					<TouchableOpacity
						style={{
							width: width * 0.35,
							height: height * 0.032,
							borderRadius: height * 0.1,
							marginTop: height * 0.007,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: colors.purple,
							flexDirection: 'row'
						}}
					>
						<Text
							style={{
								textAlign: 'right',
								color: colors.white,
								marginRight: width * 0.02
							}}
						>
							Editar Perfil
						</Text>
						<Feather
							name="chevron-right"
							color="white"
						/>
					</TouchableOpacity>
				</ProfileContainer>
			</ScrollView>
		</>
	 )
}

export default SettingsMenu;