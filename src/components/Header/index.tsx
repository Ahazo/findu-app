import React from 'react';

import { Container, Logo, BackButton } from './styles';

import { StyleSheet, View, Text, ViewStyle } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../context/auth';
import { height } from '../../constants';

interface IHeaderProps {
  hasBackButton?: boolean;
  backButtonSize?: number;
  heightPercentage: number;
  logoDimensions?: {
    height?: number;
    width?: number;
  };
  position?: 'flex-start' | 'center' | 'flex-end';
  RightComponent?: React.ReactNode;
  contentStyle?: ViewStyle;
}
const Header = (data: IHeaderProps) => {
  const SizeBackButton = data.backButtonSize || 35;

  const navigation = useNavigation();

  return (
    <Container containerHeight={data.heightPercentage}>
      <LinearGradient
        colors={[colors.purple, colors.blue_light]}
        style={{
          height: '100%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View
          style={[
            styles.content,
            data.contentStyle,
            { alignItems: data.position },
          ]}
        >
          <View
            style={{
              ...styles.backbuttonfake,
            }}
          >
            {data.hasBackButton && (
              <BackButton onPress={() => navigation.goBack()}>
                <Feather
                  name="chevron-left"
                  size={SizeBackButton}
                  color={colors.white}
                />
              </BackButton>
            )}
          </View>
          <Logo
            style={{
              flex: 1,
              marginLeft:
                data.hasBackButton && !data.RightComponent
                  ? -SizeBackButton
                  : 0,
              // quando tiver back button deixará a imagem centraliza baseada no tamanho do backbutto
            }}
            source={{
              uri:
                'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo-logo-white.png',
            }}
            resizeMode="contain"
            dimensions={{
              height: data.logoDimensions?.height,
              width: data.logoDimensions?.width,
            }}
          />
          <View
            style={{
              ...styles.backbuttonfake2,
            }}
          >
            {data.RightComponent}
          </View>
        </View>
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  backbuttonfake: {
    flexDirection: 'column',
  },
  backbuttonfake2: {
    flexDirection: 'column',
  },
});

export default Header;
