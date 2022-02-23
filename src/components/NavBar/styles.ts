import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';

export const NavContainer = styled.SafeAreaView`
	flex-direction: row;
	padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
	background-color: white;
	justify-content: center;
	align-items: center;
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

export const Title = styled.Text`
	flex: 0.5;
	text-align: center;
	color: ${colors.body};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.text};
`;