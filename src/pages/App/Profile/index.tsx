import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { UserInfoContainer, UserInfoContent, ImageContainer } from './styles';

import { ProgressBar, Colors } from 'react-native-paper';


export function Profile() {
  return (
    <>
      <SafeAreaView style={{flex: 1, borderWidth: 1,}}>
        <Header heightPercentage={30} logoDimensions={{height: height * 0.1, width: width * 0.2}}/>
 
        <UserInfoContainer>
          <UserInfoContent style={{
            elevation: 10,
            shadowColor: colors.body,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
          }}>
            <ImageContainer>
              <Image 
                source={{
                  uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg"
                }}
                resizeMode='contain'
                style={{
                  height: '61%',
                  width: '64%',
                  borderRadius: 20,
                }}
              />
            </ImageContainer>
            <View style={{
              flexDirection: 'column',
              flex: 2
            }}>
              <Text style={{
                fontFamily: fonts.heading,
                fontSize: 18,
                color: colors.heading,
              }}>
                Júlia Alves
              </Text>
              <Text style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.body,
              }}>
                Mestra da Indicação
              </Text>
              <Text style={{
                fontFamily: fonts.semibold,
                fontSize: 12,
                color: colors.body_light,
              }}>
                Nivel 3
              </Text>
              <ProgressBar progress={0.31} color={colors.purple_dark}/>
            </View>
            <ImageContainer>
              <Image 
                source={{
                  uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/champ.png"
                }}
                resizeMode='contain'
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </ImageContainer>
          </UserInfoContent>
        </UserInfoContainer>
      </SafeAreaView>
    </>
  );
}