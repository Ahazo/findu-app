import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../styles/colors';
import { Container, ButtonText } from './styles';

interface IButton extends TouchableOpacityProps {
  text: string;
  containerButtonStyle?: {};
  buttonStyle?: {};
}
const Button = ({
  text,
  containerButtonStyle = {},
  buttonStyle = {},
  ...restOfProps
}: IButton) => {
  return (
    <LinearGradient
      colors={[colors.purple, colors.blue_light]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={[styles.buttonBackground, containerButtonStyle]}
    >
      <Container {...restOfProps} style={buttonStyle}>
        <ButtonText>{text}</ButtonText>
      </Container>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBackground: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
