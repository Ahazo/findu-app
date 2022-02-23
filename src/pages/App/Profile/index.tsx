import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IUserData } from '../../../utils/dtos/IUserData';

import { 
	Container,
	ProfileContainer,
	InfoContainer,
	Name,
	Description,
	BundleContainer,
	SubTitle,
	AboutContainer,
	AboutText,
	BoldText,
	FollowInfoContainer,
	FollowInfo
} from './styles'

import api from '../../../services/api';

import { SquircleView } from 'react-native-figma-squircle';
import MaskedView from '@react-native-community/masked-view';
import NavBar from '../../../components/NavBar';
import Bundle, { IBundleItem } from '../../../components/Bundle';

export function Profile() {
	const actions = [
		{
			iconName: "settings",
			path: ""
		},
	]

	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const [userData, setUserData] = useState({} as IUserData);

	const mockBundleItens: IBundleItem[] = [
		{
			id: 1,
			title: 'Ju gata',
			description: "Eu faco uma ju p/ vc em ate dois dias",
			value: 15,
			deadline: 2,
			status: true
		},
		{
			id: 2,
			title: 'Ju gata',
			description: "Eu faco uma ju p/ vc em ate dois dias",
			value: 65.00,
			deadline: 3,
			status: true
		}
	]

	const loadUserData = async () => {
		setIsLoading(true);
		const response = await api.get('/api/users');

		if (!response || response.status !== 200) {
			console.info(response);
			setHasError(true);
			return;
		}
		setUserData(response.data as IUserData);
		setIsLoading(false);
	};

	// useEffect(() => {
	// 	loadUserData();
	// }, []);

	return (
		<>
			<NavBar
				actions={actions}
				name={"Perfil"}
			/>
			<Container>
				<ProfileContainer>
					<MaskedView
						style={{
							width: 80,
							height: 80,
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
					<InfoContainer>
						<Name>
							Julia Alves
						</Name>
						<Description>
							Senior Designer
						</Description>
						<Description>
							<BoldText>102k</BoldText> Indicacoes
						</Description>
					</InfoContainer>
				</ProfileContainer>

				<FollowInfoContainer>
					<FollowInfo><BoldText>5.2k</BoldText> Seguidores</FollowInfo>
					<FollowInfo><BoldText>1.3k</BoldText> Seguindo</FollowInfo>
					<FollowInfo><BoldText>135</BoldText> Jobs</FollowInfo>
				</FollowInfoContainer>

				<AboutContainer>
					<SubTitle>Sobre</SubTitle>
					<AboutText>Designer desde meus 5 anos, aprendi a desenvolver trabalhos que emanam a energia do cliente, com meu toque especial</AboutText>
				</AboutContainer>

				<Bundle
					bundles={mockBundleItens}
					isPrivate={true}
				/>
			</Container>
		</>
	);
}