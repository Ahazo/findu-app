import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import fontSizes from '../../../styles/fontSizes';

export const Container = styled.SafeAreaView`
  flex: 1;
	padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}
	padding-left: 20px;
	padding-right: 20px;
	background-color: white;
`;

export const ProfileContainer = styled.View`
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
	padding: 15px;
`;

export const UserProfilePhoto = styled.View`
  border-radius: 25px;

  overflow: hidden;

  width: 80px;
  height: 80px;
`;

export const InfoContainer = styled.View`
	flex: 0.7;
`;

export const Name = styled.Text`
	color: ${colors.body};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.5px;
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

export const ProfileInfo = styled.View`
	align-items: center;
`;

export const Counter = styled.Text`
	color: ${colors.body};
	font-size: ${fontSizes.subTitle}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.2px;
`;

export const CounterTitle = styled.Text`
	color: ${colors.body};
	font-size: ${fontSizes.text}px;
	font-family: ${fonts.text};
	letter-spacing: 0.2px;
`;