import React from 'react';

import {
  Container,
  Logo,
  BackButton,
} from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather'
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

interface IHeaderProps {
  hasBackButton?: boolean;
  heightPercentage: number;
  logoDimensions?: {
    height?: number;
    width?: number;
  };
}

const Header = ( data: IHeaderProps ) => {
  const navigation = useNavigation();

  return(
    <Container containerHeight={data.heightPercentage}>
      <LinearGradient
        colors={[colors.purple, colors.blue_light]}
        style={{
          position: 'absolute',
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      {data.hasBackButton &&
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={35} color={colors.white}/>
        </BackButton>
      }
      <Logo
        source={{
          uri:
            'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo-logo-white.png',
        }}
        resizeMode="contain"
        dimensions={{height: data.logoDimensions?.height, width: data.logoDimensions?.width}}
      />
    </Container>
  )
}

export default Header;
