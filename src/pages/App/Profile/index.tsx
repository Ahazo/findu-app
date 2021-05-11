import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';

export function Profile() {
  return (
    <>
      <SafeAreaView style={{flex: 1, borderWidth: 1,}}>
        <Header heightPercentage={50} hasBackButton={true} logoDimensions={{height: height * 0.06, width: width * 0.2}}/>
      </SafeAreaView>
    </>
  );
}