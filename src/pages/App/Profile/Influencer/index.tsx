import MaskedView from '@react-native-community/masked-view';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Bundle from '../../../../components/Bundle';
import NavBar, { IAction } from '../../../../components/NavBar';
import { height } from '../../../../constants';
import colors from '../../../../styles/colors';
import { IUserData } from '../../../../utils/dtos/IUserData';

interface IInfluencerProfileProps {
	isPrivate: boolean;
	user: IUserData;
	actions: IAction[];
}

import {
	ProfileBanner,
	Container,
	Content,
	ProfilePhoto,
	Info,
	Personal,
	Name,
	Username,
	Role,
	Stats,
	InfoItem,
	InfoTitle,
	FollowInfo,
	FollowersInfo,
	RatingCount,
	AboutContainer,
	AboutTitle,
	AboutText,
	BlackFilter,
} from './styles';

const bundles = [
	{
		id: '213018',
		title: 'Logo',
		area: 'Design',
		skill: 'Gráfico',
		image: 'url-falsa'
	},
	{
		id: '123931',
		title: 'Desenvolvimento web',
		area: 'Programação',
		skill: 'React',
		image: 'url-falsa'
	},
	{
		id: '2321938',
		title: 'Planta baixa',
		area: 'Arquitetura',
		skill: 'Planta',
		image: 'url-falsa'
	},
]


const InfluencerProfile = ({user, isPrivate, actions}: IInfluencerProfileProps) => {
	return (
		<ScrollView
			bounces
			showsVerticalScrollIndicator={false}
			nestedScrollEnabled
		>
			<Container>
				<ProfileBanner>
					<BlackFilter>
						<NavBar
							actions={actions}
							name={isPrivate ? "Perfil" : user.username}
							color={colors.white}
							goBack={false}
						/>
						<MaskedView
							style={{
								width: height * 0.15,
								height: height * 0.15,
								position: "absolute",
								top: 120,
							}}
								
							maskElement={
								<ProfilePhoto
									style={StyleSheet.absoluteFill}
									squircleParams={{
										cornerRadius: 35,
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
					</BlackFilter>
				</ProfileBanner>
				<Content
					squircleParams={{
						cornerSmoothing: 1,
						topLeftCornerRadius: 70,
						topRightCornerRadius: 70,
						fillColor: colors.white,
					}}
				>
					<Info>
						<Personal>
							<Name>{user.name}</Name>
							{isPrivate &&
								<Username>{user.username}</Username>
							}
						</Personal>
						<Role>FullStack Developer</Role>
						<Stats>
							<InfoItem>
								<FollowInfo>{user.following}</FollowInfo>
								<InfoTitle>Seguindo</InfoTitle>
							</InfoItem>
							<InfoItem>
								<FollowersInfo>{user.followers}</FollowersInfo>
								<InfoTitle>Seguidores</InfoTitle>
							</InfoItem>
							<InfoItem>
								<RatingCount>2</RatingCount>
								<InfoTitle>Avaliacoes</InfoTitle>
							</InfoItem>
						</Stats>
						<AboutContainer>
							<AboutTitle>Sobre</AboutTitle>
							<AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit dui nisi, et bibendum nisi tristique ut. Pellentesque sit amet eleifend ipsum.</AboutText>
						</AboutContainer>
					</Info>
					<Bundle
						isPrivate={isPrivate}
						bundles={bundles}
					/>
				</Content>
			</Container>
		</ScrollView>
	);
}

export default InfluencerProfile;
