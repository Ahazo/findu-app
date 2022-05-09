import styled from 'styled-components/native'
import { height } from '../../../../constants';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import fontSizes from '../../../../styles/fontSizes';

export const ProfileContainer = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-top: ${height * 0.05}px;
`;

export const MenuItem = styled.View`
	width: 100%;
	backgroundColor: red;
`;

export const NameText = styled.Text`
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.subTitle}px;
	color: ${colors.body};
	margin-top: ${height * 0.01}px;
`;

export const LabelText = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.text}px;
	color: ${colors.body};
`;

export const ConfigContainer = styled.View`
	width: 100%;
	margin-top: ${height * 0.03}px;
`;

export const HelpContainer = styled.View`
	background-color: rgb(231, 245, 239);
	width: 100%;
	height: ${height * 0.13}px;
	border-radius: ${height * 0.03}px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;