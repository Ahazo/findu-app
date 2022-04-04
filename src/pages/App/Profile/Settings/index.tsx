import { Feather } from '@expo/vector-icons';
import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import Button from '../../../../components/Button';
import ConfigItem from '../../../../components/ConfigItem';
import NavBar from '../../../../components/NavBar';
import { height, width } from '../../../../constants';
import { useAuth } from '../../../../context/auth';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';
import {
	LabelText,
	ConfigContainer,
	NameText,
	ProfileContainer
} from './styles';

const SettingsMenu = () => {
	const { signOut } = useAuth();
	
	const action = [
		{
			iconName: "log-out",
			color: colors.red,
			path: "",
			onPress() {
				signOut();
			}
		}
	] 
	
	return (
		<>
			<NavBar
				actions={action}
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
							width: 100,
							height: 100,
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
					</MaskedView>

					<NameText>Lucca Scarano</NameText>
					<LabelText>@scarano</LabelText>
					
					<TouchableOpacity
						style={{
							width: width * 0.40,
							height: height * 0.035,
							borderRadius: height * 0.1,
							marginTop: height * 0.01,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: colors.purple,
							flexDirection: 'row',
							paddingHorizontal: width * 0.07
						}}

						onPress={() => {
							console.log('vai pra tela de edicao de perfil');
						}}
					>
						<Text
							style={{
								color: colors.white,
								textAlign: 'center'
							}}
						>
							Editar Perfil
						</Text>
					</TouchableOpacity>
				</ProfileContainer>

				<ConfigContainer>
					<ConfigItem
						label="Freelancer"
						onPress={() => {}}
					/>
					<ConfigItem
						label="Privacidade"
						onPress={() => {}}
					/>
					<ConfigItem
						label="Termos de uso"
						onPress={() => {}}
					/>
				</ConfigContainer>
			</ScrollView>
		</>
	 )
}

export default SettingsMenu;