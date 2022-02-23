import styled from 'styled-components/native';
import { height, width } from '../../constants';

import { SquircleView } from 'react-native-figma-squircle';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import fonts from '../../styles/fonts';


export const Container = styled.View`
	padding: ${height * 0.01}px;
`;

export const BundleListContainer = styled.ScrollView`
	padding-top: ${height * 0.01}px;
`

export const BundleCard = styled(SquircleView)`
	height: ${width * 0.6}px;
	width: ${width * 0.6}px;
	margin-right: ${width * 0.02}px;
	overflow: hidden;
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
	color: ${colors.body};
	font-size: ${fontSizes.subTitle}px;
	font-family: ${fonts.heading};
	letter-spacing: 0.25px;
	margin-bottom: ${height * 0.005}px;
`;

export const Description = styled.Text`
	text-align: center;	
	color: ${colors.body_light};
	font-size: ${fontSizes.subText}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;

export const Title = styled.Text`
	text-align: center;	
	color: ${colors.body_light};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;
