import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import colors from '../../styles/colors';

interface HeartProps {
  size: number;
  liked?: boolean;
}

export function Heart({ liked = false, size, ...rest }: HeartProps) {
  return (
    <View style={{ width: size }} {...rest}>
      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: size }}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AntDesign
              name={`${liked ? 'heart' : 'hearto'}`}
              size={size}
              color="white"
            />
          </View>
        }
      >
        <LinearGradient
          colors={[colors.purple, colors.blue_light]}
          style={{ flex: 1 }}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
        />
      </MaskedView>
    </View>
  );
}
