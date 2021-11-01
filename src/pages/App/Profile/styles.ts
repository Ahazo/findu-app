import styled from 'styled-components/native';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const BannerProfileContainer = styled.View`
    height: ${height * 0.25}px;
    overflow: hidden;
`

export const Content = styled.View`
  padding: 0 ${width * 0.05}px;
  align-items: center;
  justify-content: flex-start;
`;

export const UserCardContainer = styled.View`
  width: 100%;
	height: ${height * 0.35}px;
 
  border-radius: 35px;
  background-color: ${colors.white};
  margin-top: -${height * 0.08}px;
  padding: ${height * 0.05}px ${width * 0.05}px;

  align-items: center;
  justify-content: flex-start;
`;

export const UserCardHeaderContent = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;

	min-height: 65px;
`;

export const UserProfilePhoto = styled.View`
  border-color: ${colors.purple_dark};
  border-width: 3px;
  border-radius: 25px;

  overflow: hidden;

  width: 70px;
  height: 70px;
`;

export const UserCardContentInfo = styled.View`
  flex: 1;
  margin-left: 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const UserCardBodyContent = styled.View`
	margin-top: 15px;
	width: 100%;
`;

export const FollowInfoContainer = styled.View`
	flex-direction: row;

	justify-content: space-around;
	align-items: center;
`;

export const FollowInfo = styled.View`
	justify-content: space-between;
	align-items: center;
`;

export const CallToAction = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
