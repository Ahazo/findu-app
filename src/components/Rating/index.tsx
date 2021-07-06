import React from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const rate = 2;
export function Rating() {
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
          {index === 0 && <Icon name="star-outline" size={20} />}
          {index === 1 && <Icon name="star-half-full" size={20} />}
          {index === 2 && <Icon name="star" size={20} />}
        </View>
      ))}
    </View>
  );
}
