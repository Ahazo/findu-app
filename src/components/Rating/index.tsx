import React from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const rate = 2;
interface RatingProps {
  rate: number;
  size: number;
  color?: string;
}
export default function Rating({ color = '#aaa', rate, size }: RatingProps) {
  let star = [0, 0, 0, 0, 0];
  let starFloor = Math.floor(rate);
  let decimal = rate - starFloor;

  for (var i = 0; i < starFloor; i++) {
    star[i] = 2;
  }
  if (decimal > 0) {
    star[i] = 1;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {star.map((index, key) => (
        <View key={key}>
          {index === 0 && (
            <Icon name="star-outline" size={size} color={color} />
          )}
          {index === 1 && (
            <Icon name="star-half-full" size={size} color={color} />
          )}
          {index === 2 && <Icon name="star" size={size} color={color} />}
        </View>
      ))}
    </View>
  );
}
