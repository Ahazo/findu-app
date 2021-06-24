import React from 'react';
import { View } from 'react-native';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';

export function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        heightPercentage={height * 0.2}
        position="flex-end"
        logoDimensions={{ height: height * 0.07 }}
        hasSettingsButton
        settingButtonStyle={{
          position: 'absolute',
          right: 10,
          paddingBottom: 4,
        }}
        contentStyle={{
          marginBottom: height * 0.07,
        }}
      />
    </View>
  );
}
