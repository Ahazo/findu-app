import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Header } from '../../components/Header';
import { height, width } from '../../constants';

export function SignUp() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header heightPercentage={20} hasBackButton={true}/>
        <ScrollView style={{flex: 1}}>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

})