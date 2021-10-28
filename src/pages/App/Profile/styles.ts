import styled from 'styled-components/native';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const BannerProfileContainer = styled.View`
    background-color: ${colors.purple_light};
    height: ${height * 0.25}px;
    border-bottom-left-radius: 25;
    border-bottom-right-radius: 25;
    overflow: hidden;
`

export const Content = styled.View`
  padding: 0 ${width * 0.02}px;
`;

export const UserCardContainer = styled.View`
  width: 100%;
  height: ${height * 0.25}px;
  border-radius: 35px;
  padding: 20px 20px;

  background-color: ${colors.white};

  margin-top: -${height * 0.1}px;
`;

export const UserCardContent = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

export const UserProfilePhoto = styled.View`
  background-color: ${colors.white};

  border-color: ${colors.purple_dark};
  border-width: 3px;
  border-radius: 30px;

  overflow: hidden;

  width: 80px;
  height: 80px;
`;

export const UserCardContentInfo = styled.View`
  flex: 1;
  height: 40%;

  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
`;


