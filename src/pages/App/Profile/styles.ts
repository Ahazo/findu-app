import { SquircleView } from 'react-native-figma-squircle';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import fontSizes from '../../../styles/fontSizes';

export const ProfileBanner = styled.View`
	background-color: olivedrab;
	height: ${height * 0.42}px;
`;

export const BlackFilter = styled.View`
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	background: rgba(0, 0, 0, 0.15);
	height: ${height * 0.42}px;
	width: ${width}px;
	z-index: 3;
`;

export const Container = styled.View``

export const Content = styled(SquircleView)`
	top: -${height * 0.1}px;
`

export const ProfilePhoto = styled(SquircleView)`
	width: ${height * 0.15}px;
	height: ${height * 0.15}px;
	z-index: 4;
`;

export const Info = styled.View`
	padding: ${height * 0.055}px ${width * 0.125}px 0px ${width * 0.125}px;
`;

export const Personal = styled.View`
	flex-direction: row;
	margin-bottom: ${height * 0.005}px;
	align-items: center;
`;

export const Name = styled.Text`
	max-width: ${width * 0.5}px;
	margin-right: ${width * 0.03}px;
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.title}px;
	color: ${colors.black};
`;

export const Username = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.text}px;
	color: ${colors.body};
`;

export const Role = styled.Text`
	margin-bottom: ${height * 0.03}px;
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
	color: ${colors.body};
`;

export const Stats = styled.View`
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: ${height * 0.03}px;
`;

export const InfoItem = styled.View`
	align-items: center;
`;

export const InfoTitle = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
	color: ${colors.body};
`;

export const FollowInfo = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
`;

export const FollowersInfo = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
`;

export const AboutContainer = styled.View`
	margin-bottom: ${height * 0.03}px;
`;

export const AboutTitle = styled.Text`
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.subTitle}px;
	color: ${colors.black};
	margin-bottom: ${height * 0.01}px;
`;

export const AboutText = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
	color: ${colors.body};
`;

export const AboutButtonContainer = styled(TouchableWithoutFeedback)`
	height: ${height * 0.2}px;
	width: ${height * 0.35}px;
	border-style: dashed;
	border-width: ${width * 0.008}px;
	border-radius: 20px;
	border-color: ${colors.body_light};
	align-items: center;
	justify-content: space-around;
	padding: ${width * 0.05}px;
`
export const ActivityContainer = styled.View``;

export const ActivityTitle = styled.Text`
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.subTitle}px;
	color: ${colors.black};
	margin-bottom: ${height * 0.01}px;
`