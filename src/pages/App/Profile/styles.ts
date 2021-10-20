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
  height: ${height * 0.2}px;
  border-radius: 30;
  padding: 10px 20px;

  background-color: ${colors.red};

  margin-top: -${height * 0.1};
`;

export const UserCardContent = styled.View`
  flex: 1;
  background-color: ${colors.blue_light};

  align-items: center;
  justify-content: space-between;
`;

export const UserProfilePhoto = styled.View``;

export const UserCardContentInfo = styled.View``;

export const UserCardBadge = styled.View``;

