import styled from 'styled-components/native';
import { Animated } from 'react-native';
import fonts from '../../../../styles/fonts';

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 25px;
  padding: 15px;
  margin: 0 20px;
`;

export const InputSearch = styled.TextInput`
  background-color: #fff;
  flex: 1;
  font-size: 16px;
  padding: 0 10px;
  font-family: ${fonts.semibold};
`;

export const ContactItem = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  margin: 0 10px;
  border-color: #e4e2e2;
`;

export const ContactImage = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 20px;
`;

export const ContactInfo = styled.View`
  flex: 2;
  margin-left: 8px;
`;

export const ContactInfoText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.semibold};
`;
