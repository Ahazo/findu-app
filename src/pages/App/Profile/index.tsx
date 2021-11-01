import React, { useState, useEffect } from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';

import Button from '../../../components/Button';

import { IUserData } from '../../../utils/dtos/IUserData';

import { height } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import fontSizes from '../../../styles/fontSizes';
import { 
	Container,
	BannerProfileContainer,
	UserCardContainer,
	Content,
	UserCardHeaderContent,
	UserProfilePhoto,
	UserCardContentInfo,
	UserCardBodyContent,
	FollowInfo,
	CallToAction,
	FollowInfoContainer
} from './styles'

import api from '../../../services/api';


export function Profile() {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const [userData, setUserData] = useState({} as IUserData);

	const loadUserData = async () => {
		setIsLoading(true);
		const response = await api.get('/api/users');
	
		console.info(response);

		if (!response || response.status !== 200) {
			console.info(response);
			setHasError(true);
			return;
		}

		console.info(response.data);

		setUserData(response.data as IUserData);
		setIsLoading(false);
	};

	useEffect(() => {
		loadUserData();
	}, []);


	return (
		<>
			<Container>
				<BannerProfileContainer>
					<Image 
						source={{
							uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/banner.jpeg"
						}}
						style={{
							width: "100%",
							height: "100%",
							borderBottomLeftRadius: 25,
							borderBottomRightRadius: 25
						}}
					/>
				</BannerProfileContainer>

				<Content>
					<UserCardContainer style={styles.shadowContainer}>
						<UserCardHeaderContent>
							<UserProfilePhoto>
								<Image 
									source={{
										uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg"
									}}
									style={{
										width: "100%",
										height: "100%",
									}}
								/>
							</UserProfilePhoto>
							<UserCardContentInfo>
									<View
										style={{ 
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "flex-start"
										}}
									>
										<Text style={{
											fontSize: fontSizes.title,
											color: colors.purple_dark,
											fontFamily: fonts.heading,
											marginRight: 5
										}}>
											{userData.name}
										</Text>
									
										<Text style={{
											fontSize: fontSizes.subTitle,
											color: colors.body_light,
											fontFamily: fonts.semibold
										}}>
											(Ela / Dela)
										</Text>
									</View>

									<Text style={{
										fontSize: fontSizes.text,
										color: colors.body_light,
										fontFamily: fonts.semibold
									}}>
										Programadora Python / Web
									</Text>
									<Text style={{
										fontSize: fontSizes.subText,
										color: colors.blue_light,
										fontFamily: fonts.text
									}}>
										Igor e + 15 outros recomendam
									</Text>

							</UserCardContentInfo>
						</UserCardHeaderContent>
						<UserCardBodyContent>
							<FollowInfoContainer>
								<FollowInfo>
									<Text
										style={{
											fontSize: fontSizes.subTitle,
											color: colors.body,
											fontFamily: fonts.heading
										}}
									>
										{userData.followers}
									</Text>
									<Text
										style={{
											fontSize: fontSizes.text,
											color: colors.body_light,
											fontFamily: fonts.semibold
										}}
									>
										Followers
									</Text>
								</FollowInfo>
								<FollowInfo>
									<Text
										style={{
											fontSize: fontSizes.subTitle,
											color: colors.body,
											fontFamily: fonts.heading
										}}
									>
										{userData.following}
									</Text>
									<Text
										style={{
											fontSize: fontSizes.text,
											color: colors.body_light,
											fontFamily: fonts.semibold
										}}
									>
										Following
									</Text>
								</FollowInfo>
								<FollowInfo>
									<Text
										style={{
											fontSize: fontSizes.subTitle,
											color: colors.body,
											fontFamily: fonts.heading
										}}
									>
										{userData.projects}
									</Text>
									<Text
										style={{
											fontSize: fontSizes.text,
											color: colors.body_light,
											fontFamily: fonts.semibold
										}}
									>
										Projects
									</Text>
								</FollowInfo>
							</FollowInfoContainer>
							<CallToAction>
								<Button
                  text="ENTRAR"
                  containerButtonStyle={{
                    marginTop: height * 0.02,
										width: "68%"
									}}
                />

								<Button
                  text="ENTRAR"
                  containerButtonStyle={{
                    marginTop: height * 0.02,
										width: "30%"
                  }}
                />
							</CallToAction>
						</UserCardBodyContent>
					</UserCardContainer>
				</Content>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	shadowContainer: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
	}
})