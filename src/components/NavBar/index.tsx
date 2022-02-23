import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import { NavContainer, BackButton, ActionsContainer, Title } from './styles';

interface IAction {
	iconName: any;
	path: string;
}

interface INavBarProps {
	actions?: IAction[];
	name: string;
}

const NavBar = (props: INavBarProps) => {
	return (
		<NavContainer>
			<BackButton>
				<Feather
					name="chevron-left"
					size={width * 0.06}
					color={colors.body}
				/>
			</BackButton>
			<Title>{props.name}</Title>
			<ActionsContainer>
				{props.actions?.map((action, index) => {
					return (
						<TouchableOpacity
							style={{
								padding: 5
							}}
							key={index}
						>
							<Feather
								name={action.iconName}
								size={width * 0.06}
								color={colors.body}
							/>
						</TouchableOpacity>
					);
				})}
			</ActionsContainer>
		</NavContainer>
	);
}

export default NavBar;