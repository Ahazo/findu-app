import React from 'react';
import { View } from 'react-native';

import Header from '../../../components/Header';
import { height } from '../../../constants';

export function Explorer() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        heightPercentage={height * 0.2}
        position="flex-end"
        hasBackButton
        backButtonFakeStyle={{
          position: 'absolute',
          top: '65%',
          left: 20,
        }}
        logoDimensions={{ height: height * 0.07 }}
        contentStyle={{
          marginBottom: height * 0.07,
        }}
      />
    </View>
  );
}
