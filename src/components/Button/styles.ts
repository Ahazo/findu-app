import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';

export const Container = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width * 0.8}px;
  align-items: center;
  justify-content: center;
  padding: ${Dimensions.get('screen').height * 0.02}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.heading};
  font-size: ${fontSizes.subText}px;
  letter-spacing: 1px;
`;
