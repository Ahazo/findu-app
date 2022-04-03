import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { IUserData } from '../../../utils/dtos/IUserData';

import { 
	Container,
	ProfileContainer,
	InfoContainer,
	Name,
	Description,
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
import BundleList, { IBundleItem } from '../../../components/BundleList';
import { useAuth } from '../../../context/auth';

export function Profile() {
  const { signOut } = useAuth();
	
	const actions = [
		{
			iconName: "settings",
			path: "",
			onPress() {
				signOut()
			},
		},
	]

	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const [userData, setUserData] = useState({} as IUserData);

	const mockBundleItens: IBundleItem[] = [
		{
			id: 1,
			title: 'Logo',
			description: "Concepcao e atualizacao de logos para empresas serias.",
			value: 15,
			deadline: 2,
			status: true,
			images: ["https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash1.jpg", "https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash3.jpg", "https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash2.jpg"]
		},
		{
			id: 2,
			title: 'Web Design',
			description: "Web design completo de sites com ate 5 paginas.",
			value: 65.30,
			deadline: 3,
			status: true,
			images: ["https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash1.jpg"]
		},
		{
			id: 3,
			title: 'Web Design',
			description: "Web design completo de sites com ate 5 paginas.",
			value: 65.30,
			deadline: 3,
			status: true,
			images: ["https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash1.jpg", "https://storage.googleapis.com/images-ahazo-dev/dev-images/unsplash2.jpg"]
		}
	]

	const loadUserData = async () => {
		setIsLoading(true);
		const response = await api.get('/users');

		if (!response || response.status !== 200) {
			console.info(response);
			setHasError(true);
			return;
		}
		setUserData(response.data as IUserData);
		setIsLoading(false);
	};

	useEffect(() => {
		loadUserData();
	}, []);

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
							{userData.name}
						</Name>
						<Description>
							@{userData.username}
						</Description>
						<Description>
							Senior Designer
						</Description>
						<Description>
							<BoldText>102k</BoldText> Indicacoes
						</Description>
					</InfoContainer>
				</ProfileContainer>

				<FollowInfoContainer>
					<FollowInfo><BoldText>{userData.followers}</BoldText> Seguidores</FollowInfo>
					<FollowInfo><BoldText>{userData.following}</BoldText> Seguindo</FollowInfo>
					<FollowInfo><BoldText>135</BoldText> Jobs</FollowInfo>
				</FollowInfoContainer>

				<AboutContainer>
					<SubTitle>Sobre</SubTitle>
					<AboutText>Designer desde meus 5 anos, aprendi a desenvolver trabalhos que emanam a energia do cliente, com meu toque especial</AboutText>
				</AboutContainer>

				<BundleList
					bundles={mockBundleItens}
					isPrivate={true}
				/>

				{/* <Activities
					userId={}
					isPrivate={true}
				/> */}
			</Container>
		</>
	);
}