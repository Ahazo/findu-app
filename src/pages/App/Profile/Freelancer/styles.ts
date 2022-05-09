import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { height } from '../../../../constants';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import fontSizes from '../../../../styles/fontSizes';

export const Container = styled(ScrollView)`
  flex: 1;
	background-color: white;
`;

export const ProfileContainer = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: ${height * 0.01}px ${height * 0.02}px;
`;

export const InfoContainer = styled.View`
	padding: ${height * 0.015}px;
`;

export const Name = styled.Text`
	color: ${colors.purple};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.3px;
`;

export const Description = styled.Text`
	color: ${colors.body_light};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;

export const ProfileInfoContainer = styled.View`
	flex-direction: row;
	margin-top: 20px;
	justify-content: space-around;
	align-items: center;
`;

export const FollowInfoContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	padding: 0 ${height * 0.01}px ${height * 0.01}px ${height * 0.01}px;
`;

export const FollowInfo = styled.Text`
	color: ${colors.body_light};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
	padding: 0 ${height * 0.02}px 0 0;
`

export const AboutContainer = styled.View`
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${height * 0.01}px ${height * 0.02}px;
`;

export const AboutText = styled.Text`
	color: ${colors.body_light};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;

export const BundleContainer = styled(AboutContainer)``;

export const SubTitle = styled.Text`
	color: ${colors.body};
	font-size: ${fontSizes.subTitle}px;
	font-family: ${fonts.heading};
	letter-spacing: 0.25px;
	margin-bottom: ${height * 0.005}px;
`;

export const BoldText = styled.Text`
	color: ${colors.body};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.2px;
`

export const Role = styled.Text`
	color: ${colors.body_light};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.1px;
	margin-bottom: ${height * 0.005}px;
`;