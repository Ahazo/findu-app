
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../context/auth';;

const Routes: React.FC = () => {

	const { user, isLoading } = useAuth();

	if (isLoading) {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color='#FF9000' />
			</View>
		) 
	}

	return <AuthRoutes />;
}

export default Routes;