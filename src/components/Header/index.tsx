import React from 'react';

import { Container, Logo, BackButton } from './styles';

import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

import { SvgUri } from 'react-native-svg';

interface IHeaderProps {
  hasBackButton?: boolean;
  backButtonSize?: number;
  hasSettingsButton?: boolean;
  heightPercentage: number;
  logoDimensions?: {
    height?: number;
    width?: number;
  };
  position?: 'flex-start' | 'center' | 'flex-end';
  contentStyle?: ViewStyle;
  backButtonFakeStyle?: ViewStyle;
  settingButtonStyle?: ViewStyle;
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
            { alignItems: data.position, justifyContent: 'space-between' },
          ]}
        >
          <View style={[styles.backbuttonfake, data.backButtonFakeStyle]}>
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
          <View style={[styles.backbuttonfake2, data.settingButtonStyle]}>
            {data.hasSettingsButton && (
              <TouchableOpacity>
                <SvgUri
                  width="25"
                  height="25"
                  uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/settings.svg"
                />
              </TouchableOpacity>
            )}
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
    zIndex: 2, // voce precisa do zIndex 2 para os botoes funcionarem
  },
  backbuttonfake2: {
    flexDirection: 'column',
    zIndex: 2,
  },
});

export default Header;
