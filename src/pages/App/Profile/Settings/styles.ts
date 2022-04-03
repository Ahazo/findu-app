import styled from 'styled-components/native'
import { height } from '../../../../constants';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import fontSizes from '../../../../styles/fontSizes';

export const ProfileContainer = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-top: ${height * 0.05};
`;

export const MenuItem = styled.View`
	width: 100%;
	backgroundColor: red;
`;

export const NameText = styled.Text`
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.subTitle}px;
	color: ${colors.body};
	margin-top: ${height * 0.01};
`;

export const LabelText = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.text}px;
	color: ${colors.body};
`;