import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../styles/colors';
import { Container, ButtonText } from './styles';
import { SquircleView } from 'react-native-figma-squircle';

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
		<SquircleView 
			squircleParams={{
				cornerRadius: 20,
				cornerSmoothing: 1,
				fillColor: colors.purple,
			}}
			style={[styles.buttonBackground, containerButtonStyle, restOfProps.disabled && styles.disabledButton]}
		>
			<Container {...restOfProps} style={[buttonStyle]}>
				<ButtonText>{text}</ButtonText>
			</Container>
		</SquircleView>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBackground: {
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

	disabledButton: {
		opacity: 20,	
	}
});
