import { SquircleView } from 'react-native-figma-squircle';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';

export const BundleContent = styled(SquircleView)`
	height: ${height * 0.35}px;
	width: ${height * 0.35}px;
	align-items: center;
`;

export const ButtonContainer = styled(TouchableWithoutFeedback)`
	height: ${height * 0.35}px;
	width: ${height * 0.35}px;
	margin-right: ${width * 0.05}px;
`;

export const InfoContainer = styled(SquircleView)`
	width: 100%;
	height: 30%;
	position: absolute;
	bottom: 0;
	padding: ${height * 0.015}px ${width * 0.05}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InfoContent = styled.View``;

export const PackageLabel = styled.Text`
	color: ${colors.white};
	font-family: ${fonts.text};
`;

export const BundleTitle = styled.Text`
	color: ${colors.white};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.semibold};
`;

export const CategoryContainer = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const CTAButtonContainer = styled(TouchableOpacity)`
	height: ${height * 0.05}px;
	width: ${width * 0.2}px;
`;

export const CallToAction = styled(SquircleView)`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const ButtonLabel = styled.Text`
	color: ${colors.white};
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
`;
