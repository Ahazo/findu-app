import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';

export function Dashboard() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header heightPercentage={20} hasBackButton={true} logoDimensions={{height: height * 0.11, width: width * 0.2}}/>
      </SafeAreaView>
    </>
  );
}