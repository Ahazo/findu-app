import React from 'react';

import {
  Container,
  Logo,
  BackButton,
} from './styles';

import { StyleSheet, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather'
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../context/auth';
import { height } from '../../constants';

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
        style={styles.content}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={{
          ...styles.backbuttonfake2,
          height: data.logoDimensions?.height,
        }}>
        {data.hasBackButton &&
          <BackButton onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={35} color={colors.white}/>
          </BackButton>
        }
        </View>
        <Logo
          source={{
            uri:
              'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo-logo-white.png',
          }}
          resizeMode="contain"
          dimensions={{height: data.logoDimensions?.height, width: data.logoDimensions?.width}}
        />
        <View style={{
          ...styles.backbuttonfake,
          height: data.logoDimensions?.height,
        }}>
        </View>
      </LinearGradient>
    </Container>
  )
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
  },
  backbuttonfake: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 25,
    height: 60,
    width: 60,
  },
  backbuttonfake2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 25,
    height: 60,
    width: 60,
  }
})

export default Header;
