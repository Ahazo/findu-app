import styled from 'styled-components/native';

import { height } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

type TabProps = {
  active: boolean;
};
export const Container = styled.View`
  flex: 1;
  margin-top: -${height * 0.05}px;
`;

export const UserInfoContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;
  height: ${height * 0.11}px;
`;

export const UserInfoContent = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 20px;
`;

export const InfoContainer = styled.View`
  flex: 2;
`;

export const UserName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 16px;
  color: ${colors.heading};
`;

export const LevelDescription = styled.Text`
  font-family: ${fonts.semibold};
  font-size: 14px;
  color: ${colors.body};
`;

export const LevelTitle = styled.Text`
  font-family: ${fonts.semibold};
  font-size: 12px;
  color: ${colors.body_light};
`;

export const BadgeContainer = styled.View`
  flex: 1;
`;

export const ContainerIndication = styled.View`
  justify-content: space-between;
`;

export const HeaderIndication = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 15px;
  padding: 0 20px;
`;

export const HeadingText = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 16px;
`;

export const TabNavigationContainer = styled.View`
  flex-direction: row;
`;

export const TabText = styled.Text<TabProps>`
  color: ${props => (props.active ? colors.heading : colors.body)};
  font-family: ${fonts.heading};
  font-size: 13px;
  font-weight: bold;
`;

export const ProfileIndicationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Indication = styled.View`
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin: 0 5px;
  padding: 15px 20px;
  border-radius: 20px;
`;

export const TitleText = styled.Text`
  font-size: 13px;
  font-family: ${fonts.semibold};
  color: ${colors.body};
`;

export const SubTitleText = styled.Text`
  font-size: 13px;
  font-family: ${fonts.text};
  color: ${colors.body};
`;

export const BudgetContainer = styled.View`
  margin-top: 20px;
`;

export const BudgetInfoContainer = styled.View`
  background-color: #fff;
  width: 100%;
  height: ${height * 0.1}px;
  margin-top: 15px;
  border-radius: 30px;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
`;

export const BudgetTextContainer = styled.View`
  margin-left: 15px;
`;

export const ActivityContainer = styled.View`
  margin-top: 20px;
`;
