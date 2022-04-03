import React from 'react';
import { ScrollView } from 'react-native';
import {
	MenuItem
} from './styles';

const SettingsMenu = () => {
	// Edicao de perfil
	// Privacidade
	// Termos de uso
	// Logout

	
	return (
		<ScrollView
			style={{
				flex: 1
			}}
		>
			<MenuItem>
				Editar Perfil
			</MenuItem>
		</ScrollView>
	 )
}