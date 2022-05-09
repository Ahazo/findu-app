import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { height } from '../../constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';

export const NavContainer = styled.SafeAreaView`
	flex-direction: row;
	padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
	justify-content: center;
	align-items: center;
	margin-top: ${0.07 * height}px;
	padding-bottom: ${0.02 * height}px
`;

export const BackButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	flex: 0.2;
`

export const ActionsContainer = styled.View`
	flex: 0.2;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text<{
		color: string
	}>`
	flex: 0.5;
	text-align: center;
	color: ${props => props.color || colors.body};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.text};
`;