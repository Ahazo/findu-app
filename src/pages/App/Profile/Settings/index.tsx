import MaskedView from '@react-native-community/masked-view';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import ConfigItem from '../../../../components/ConfigItem';
import NavBar from '../../../../components/NavBar';
import { height, width } from '../../../../constants';
import { useAuth } from '../../../../context/auth';
import colors from '../../../../styles/colors';
import {
	LabelText,
	ConfigContainer,
	NameText,
	ProfileContainer,
} from './styles';

const SettingsMenu = () => {
	const { signOut } = useAuth();
	const navigation = useNavigation();

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
					flex: 1,
					paddingHorizontal: height * 0.05
				}}
			>
				<ProfileContainer>
					<MaskedView
						style={{
							width: height * 0.125,
							height: height * 0.125,
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
					<LabelText>scarano</LabelText>
					
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
							navigation.navigate('EditProfile')
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
						onPress={() => {
							navigation.navigate('Freelancer')
						}}
					/>
					<ConfigItem
						label="Histórico"
						onPress={() => {}}
					/>
					<ConfigItem
						label="Segurança & Privacidade"
						onPress={() => {}}
					/>
					<ConfigItem
						label="Termos De Uso"
						onPress={() => {}}
					/>
				</ConfigContainer>

				{/* <HelpContainer>
					<Feather
						name='compass'
						color={colors.green}
						size={width * 0.07}
					/>
					<Text
						style={{
							marginLeft: width*0.02,
							fontFamily: fonts.semibold,
							fontSize: fontSizes.text,
							color: colors.green
						}}
					>
						Como podemos te ajudar?
					</Text>
				</HelpContainer> */}
			</ScrollView>
		</>
	 )
}

export default SettingsMenu;