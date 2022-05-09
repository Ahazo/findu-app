import React from 'react';
import {
	Image,
	StyleSheet
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { SquircleView } from 'react-native-figma-squircle';
import BundleList, { IBundleItem } from '../../../../components/BundleList';

import {
	Container,
	ProfileContainer,
	InfoContainer,
	Name,
	Description,
	Role,
	FollowInfoContainer,
	FollowInfo,
	BoldText,
	AboutContainer,
	SubTitle,
	AboutText,
} from './styles';
import { IUserData } from '../../../../utils/dtos/IUserData';

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

const Freelancer = (userData: IUserData) => {
	return (
		<>
			<Container>
				<ProfileContainer>
					<MaskedView
						style={{
							width: 90,
							height: 90,
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
							{userData.username}
						</Description>
						<Role>
							Senior Designer
						</Role>
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
	)
}

export default Freelancer;