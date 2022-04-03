import styled from 'styled-components/native';
import { height, width } from '../../constants';

import { SquircleView } from 'react-native-figma-squircle';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import fonts from '../../styles/fonts';


export const Container = styled.View`
	width: 100%;
	padding: ${height * 0.01}px 0;
`;

export const BundleListContainer = styled.ScrollView`
	padding-left: ${height * 0.02}px;
`

export const BundleCard = styled.View`
	background-color: #FCFCFC;
	height: ${width * 0.75}px;
	width: ${width * 0.75}px;
	margin-right: ${width * 0.02}px;
	border-radius: 20px;
`;

export const TipTextContainer = styled.View`
	justify-content: center;
	align-items: center;
	padding-left: ${height * 0.03}px;
	padding-right: ${height * 0.03}px;
`;

export const TipTitle = styled.Text`
	text-align: center;	
	color: ${colors.purple};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.1px;
`;

export const SubTitle = styled.Text`
	padding: ${height * 0.01}px ${height * 0.02}px;	
	color: ${colors.body};
	font-size: ${fontSizes.subTitle}px;
	font-family: ${fonts.heading};
	letter-spacing: 0.25px;
	margin-bottom: ${height * 0.005}px;
`;

export const Description = styled.Text`
	color: ${colors.body_light};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;

export const TipDescription = styled(Description)`
	text-align: center;
`

export const Title = styled.Text`
	color: ${colors.purple};
	font-size: ${fontSizes.subTitle}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.2px;
`;

export const InfoContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	margin-top: auto;
`;


export const EstimatedTimeContainer = styled(SquircleView)`
	padding: ${width * 0.02}px ${width * 0.03}px;
	margin-right: ${width * 0.02}px;
	overflow: hidden;
`;


export const PriceContainer = styled(SquircleView)`
	padding: ${width * 0.02}px ${width * 0.03}px;
	overflow: hidden;
`;

export const InfoText = styled.Text`
	color: white;
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.1px;
`;