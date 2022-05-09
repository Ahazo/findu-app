import React, { useState, useEffect } from 'react';
import { IUserData } from '../../../utils/dtos/IUserData';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../../../components/NavBar';
import InfluencerProfile from './Influencer';
import colors from '../../../styles/colors';

export function Profile() {
	const navigation = useNavigation();
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

	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [userData, setUserData] = useState({} as IUserData);

	const loadUserData = async () => {
		setIsLoading(true);
		const response = await api.get('/users');
		if (!response || response.status !== 200) {
			console.info(response);
			setHasError(true);
			return;
		}
		console.log(response.data);

		setUserData(response.data as IUserData);
		setIsLoading(false);
	};

	useEffect(() => {
		loadUserData();
	}, []);

	return (
		<>
			<InfluencerProfile
				isPrivate={true}
				user={userData}
				actions={actions}
			/>
		</>
	);
}