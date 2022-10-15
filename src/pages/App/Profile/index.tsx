import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../../../components/NavBar';
import colors from '../../../styles/colors';
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
	AboutContainer,
	AboutTitle,
	AboutText,
	BlackFilter,
	AboutButtonContainer,
	ActivityTitle,
	ActivityContainer,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import MaskedView from '@react-native-community/masked-view';
import { height } from '../../../constants';
import { Image, StyleSheet } from 'react-native';
import { useAuth } from '../../../context/auth';
import Loading from '../../../components/Loading';
import { Feather } from '@expo/vector-icons';
import EmptyUserActivityList from './Activity/EmptyUserActivityList';

export function Profile() {
	const navigation = useNavigation();
	const { loadUserData, user } = useAuth();

	const actions = [
		{
			iconName: "settings",
			path: "",
			onPress() {
				navigation.navigate("SettingsMenu");
			},
			color: colors.white
		},
	]
	
	let isUserEmpty = Object.entries(user).length === 0;

	useEffect(() => {
		loadUserData();
	}, []);

	return (
		<>
			{(!isUserEmpty && (
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
									name={"Perfil"}
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
									<Name>{user.first_name + " " + user.last_name}</Name>
									<Username>{user.username}</Username>
								</Personal>
								<Role>{user.freelancer?.title ?? "Influencer"}</Role>
								<Stats>
									<InfoItem>
										<FollowInfo>{user.following_count}</FollowInfo>
										<InfoTitle>Seguindo</InfoTitle>
									</InfoItem>
									<InfoItem>
										<FollowersInfo>{user.follower_count}</FollowersInfo>
										<InfoTitle>Seguidores</InfoTitle>
									</InfoItem>
								</Stats>
								<AboutContainer>
									<AboutTitle>Sobre</AboutTitle>
									{user.description ?
										<AboutText>{user.description}</AboutText> :
										<AboutButtonContainer onPress={() => navigation.navigate('EditProfile')}>
											<Feather
												name="edit"
												size={height * 0.03}
												color={colors.purple_light}
											/>
											<AboutText>Adicione sua descrição para que todos te conheçam um pouco melhor.</AboutText>
										</AboutButtonContainer>  
									}
								</AboutContainer>
								<ActivityContainer>
									<ActivityTitle>Atividades</ActivityTitle>
									<EmptyUserActivityList/>
								</ActivityContainer>
							</Info>
						</Content>
					</Container>
				</ScrollView>
			)) ?? <Loading />}
		</>
	);
}