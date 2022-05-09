import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import { NavContainer, BackButton, ActionsContainer, Title } from './styles';

export interface IAction {
	iconName: any;
	path: string;
	onPress(): void;
	color?: string;
}

interface INavBarProps {
	actions?: IAction[];
	name: string;
	goBack?: boolean;
	color: string;
}

const NavBar = ({actions=[], name="", goBack=true, color}: INavBarProps) => {
	const navigation = useNavigation();
	const canGoBack = navigation.canGoBack();

	return (
		<NavContainer>
			<BackButton
				onPress={() => {
					if (canGoBack && goBack) {
						return navigation.goBack()
					}
				}}
			>
				{canGoBack &&
					<Feather
						name="chevron-left"
						size={width * 0.07}
						color={color ?? colors.body}
					/>
				}
			</BackButton>
			<Title color={color ?? colors.body}>{name}</Title>
			<ActionsContainer>
				{actions?.map((action, index) => {
					return (
						<TouchableOpacity
							style={{
								padding: 5
							}}
							key={index}
							onPress={action.onPress}
						>
							<Feather
								name={action.iconName}
								size={width * 0.06}
								color={action.color ? action.color : colors.body}
							/>
						</TouchableOpacity>
					);
				})}
			</ActionsContainer>
		</NavContainer>
	);
}

export default NavBar;