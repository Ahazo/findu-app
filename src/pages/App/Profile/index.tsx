import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {
  UserInfoContainer,
  UserInfoContent,
  ImageContainer,
  ContainerIndication,
  Indication,
  UsedIndication,
} from './styles';

import { ProgressBar } from 'react-native-paper';

export function Profile() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, borderWidth: 1 }}>
        <Header
          heightPercentage={height * 0.3}
          logoDimensions={{ height: height * 0.1, width: width * 0.2 }}
        />

        <View
          style={{
            flex: 1,
            marginTop: height * 0.3,
            paddingHorizontal: 20,
          }}
        >
          <UserInfoContainer
            style={{
              height: height * 0.15,
              transform: [
                {
                  translateY: -height * 0.08,
                },
              ],
            }}
          >
            <UserInfoContent
              style={{
                elevation: 10,
                shadowColor: colors.body,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
              }}
            >
              <ImageContainer>
                <Image
                  source={{
                    uri:
                      'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
                  }}
                  resizeMode="contain"
                  style={{
                    height: '61%',
                    width: '64%',
                    borderRadius: 20,
                  }}
                />
              </ImageContainer>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 18,
                    color: colors.heading,
                  }}
                >
                  Júlia Alves
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 14,
                    color: colors.body,
                  }}
                >
                  Mestra da Indicação
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.semibold,
                    fontSize: 12,
                    color: colors.body_light,
                  }}
                >
                  Nivel 3
                </Text>
                <ProgressBar progress={0.31} color={colors.purple_dark} />
              </View>
              <ImageContainer>
                <Image
                  source={{
                    uri:
                      'https://storage.googleapis.com/images-ahazo-dev/dev-images/champ.png',
                  }}
                  resizeMode="contain"
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </ImageContainer>
            </UserInfoContent>
          </UserInfoContainer>

          <ContainerIndication
            style={{
              flexDirection: 'row',
            }}
          >
            <Indication
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                flex: 1,
                marginRight: 20,
                padding: 10,
                alignItems: 'center',
                borderRadius: 20,
                elevation: 10,
                shadowColor: colors.body,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
              }}
            >
              <Image
                source={{
                  uri:
                    'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
                }}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 15,
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>Indiquei</Text>
                <Text style={{ fontSize: 16 }}>3 vezes</Text>
              </View>
            </Indication>

            <UsedIndication
              style={{
                backgroundColor: '#fff',
                flex: 1,
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
                borderRadius: 20,
                elevation: 10,
                shadowColor: colors.body,
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
              }}
            >
              <Image
                source={{
                  uri:
                    'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
                }}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 15,
                }}
              />

              <View style={{ marginLeft: 10, flexShrink: 1 }}>
                <Text style={{ fontSize: 16 }}>Usei indicações</Text>
                <Text style={{ fontSize: 16 }}>2 vezes</Text>
              </View>
            </UsedIndication>
          </ContainerIndication>
        </View>
      </SafeAreaView>
    </>
  );
}
