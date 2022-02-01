import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { IUserData } from '../../../utils/dtos/IUserData';

import { 
	Container,
	UserProfilePhoto,
	ProfileContainer,
	InfoContainer,
	Name,
	Description,
	ProfileInfo,
	ProfileInfoContainer,
	Counter,
	CounterTitle,
} from './styles'

import { Feather } from '@expo/vector-icons';
import api from '../../../services/api';
import colors from '../../../styles/colors';

import { SquircleView } from 'react-native-figma-squircle';
import MaskedView from '@react-native-community/masked-view';

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
				{/* <BannerProfileContainer>
					<Image 
						source={{
							uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/banner.jpeg"
						}}
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</BannerProfileContainer> */}

				<ProfileContainer>
					{/* <UserProfilePhoto>
						<Image 
							source={{
								uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg"
							}}
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
					</UserProfilePhoto> */}

					<MaskedView
						style={{
							width: 80,
							height: 80,
						}}
						maskElement={
							<SquircleView
								style={StyleSheet.absoluteFill}
								squircleParams={{
									cornerRadius: 30,
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
					</InfoContainer>
					<Feather
						name='edit'
						size={24}
						color={colors.body}
					/>
				</ProfileContainer>
				<ProfileInfoContainer>
					<ProfileInfo>
						<Counter>300</Counter>
						<CounterTitle>Seguindo</CounterTitle>	
					</ProfileInfo>

					<ProfileInfo>
						<Counter>300</Counter>
						<CounterTitle>Seguidores</CounterTitle>						
					</ProfileInfo>

					<ProfileInfo>
						<Counter>10</Counter>
						<CounterTitle>Indicacoes</CounterTitle>	
					</ProfileInfo>
				</ProfileInfoContainer>
			</Container>
		</>
	);
}