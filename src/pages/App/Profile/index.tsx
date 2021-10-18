import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ColoredHeader from '../../../components/ColoredHeader';
import { Friends } from './Friend';
import { height } from '../../../constants';

import { SvgUri } from 'react-native-svg';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../../styles/colors';

import {
  Container,
  UserInfoContainer,
  UserInfoContent,
  ProfileContainer,
  ProfilePhoto,
  InfoContainer,
  UserName,
  LevelDescription,
  LevelTitle,
  BadgeContainer,
  ContainerIndication,
  HeaderIndication,
  HeadingText,
  TabNavigationContainer,
  TabText,
  Indication,
  ProfileIndicationContainer,
  TitleText,
  SubTitleText,
  BudgetContainer,
  BudgetInfoContainer,
  BudgetTextContainer,
  ActivityContainer,
} from './styles';

interface IUserData {
  person: {
    id: number;
    cpf: number;
    email: string;
    cellphone: string;
    first_name: string;
    last_name: string;
    birth_date: Date;
    address_id: number;
    created_at: Date;
    updated_at: Date;
  };
  id: number;
  person_id: number;
  username: string;
  password: string;
  status: string;
  experience: number;
  recommendations_count: number;
  followers_count: number;
  campaigns_count: number;
  created_at: Date;
  updated_at: Date;
}

export function Profile() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({} as IUserData);

  useEffect(() => {
    const loadUserData = async () => {
      await AsyncStorage.getItem('@Ahazo:user').then(value => {
        if (!value || value === null) {
          console.error('UNABLE TO GET ASYNC STORAGE');
        }

        if(value) {
          setUserData(JSON.parse(value))
        }
      });
    };

    loadUserData();
  }, []);

  if (!userData) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        SEM USUÁRIO
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <ColoredHeader
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
        <Container>
          <UserInfoContainer>
            <UserInfoContent style={styles.shadow}>
              <ProfileContainer>
                <ProfilePhoto
                  source={{
                    uri:
                      'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
                  }}
                  resizeMode="contain"
                />
              </ProfileContainer>
              <InfoContainer>
                <UserName>Qualquer Nome</UserName>
                <LevelDescription>Mestra da Indicação</LevelDescription>
                <LevelTitle>Nivel 3</LevelTitle>
                <ProgressBar
                  progress={0.31}
                  color={colors.purple_dark}
                  style={{ borderRadius: 47 }}
                />
              </InfoContainer>
              <BadgeContainer>
                <SvgUri
                  width="100%"
                  height="100%"
                  uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/bagbadge.svg"
                  style={{
                    position: 'absolute',
                    top: -30,
                  }}
                />
              </BadgeContainer>
            </UserInfoContent>
          </UserInfoContainer>

          <HeaderIndication>
            <HeadingText>Meu AHAZO</HeadingText>
            <TabNavigationContainer>
              <TouchableOpacity onPress={() => setOpen(!open)}>
                <TabText active={!open} style={{ marginRight: 10 }}>
                  PERFIL
                </TabText>
                {!open && (
                  <View
                    style={{
                      width: '50%',
                      height: 2,
                      marginRight: 10,
                      backgroundColor: '#7742FE',
                      alignSelf: 'center',
                    }}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpen(!open)}>
                <TabText active={open}>AMIGOS</TabText>
                {open && (
                  <View
                    style={{
                      width: '50%',
                      height: 2,
                      marginRight: 2,
                      backgroundColor: '#7742FE',
                      alignSelf: 'center',
                    }}
                  />
                )}
              </TouchableOpacity>
            </TabNavigationContainer>
          </HeaderIndication>

          {open ? (
            <Friends />
          ) : (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  flex: 1,
                }}
                contentContainerStyle={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  paddingBottom: 100,
                }}
              >
                <ContainerIndication>
                  <ProfileIndicationContainer>
                    <Indication style={styles.shadow}>
                      <SvgUri
                        width="24"
                        height="24"
                        uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/feedback.svg"
                      />
                      <View style={{ marginLeft: 10 }}>
                        <TitleText>Indiquei</TitleText>
                        <SubTitleText>4 vezes</SubTitleText>
                      </View>
                    </Indication>
                    <Indication style={styles.shadow}>
                      <SvgUri
                        width="24"
                        height="24"
                        uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/discountblue.svg"
                      />

                      <View style={{ marginLeft: 10 }}>
                        <TitleText>Ahazei</TitleText>
                        <SubTitleText>2 vezes</SubTitleText>
                      </View>
                    </Indication>
                  </ProfileIndicationContainer>
                </ContainerIndication>

                <BudgetContainer>
                  <HeadingText>Minha Carteira</HeadingText>

                  <BudgetInfoContainer
                    style={[{ borderTopLeftRadius: 8 }, styles.shadow]}
                  >
                    <SvgUri
                      width="40"
                      height="40"
                      uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/recommendation.svg"
                    />
                    <BudgetTextContainer>
                      <TitleText style={{ color: colors.heading }}>
                        5 indicações adquiridas
                      </TitleText>
                      <SubTitleText>Clique para ver</SubTitleText>
                    </BudgetTextContainer>
                  </BudgetInfoContainer>
                  <BudgetInfoContainer
                    style={[{ borderTopLeftRadius: 8 }, styles.shadow]}
                  >
                    <SvgUri
                      width="40"
                      height="40"
                      uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/coupom.svg"
                    />
                    <BudgetTextContainer>
                      <TitleText style={{ color: colors.heading }}>
                        3 Campanhas participantes
                      </TitleText>
                      <SubTitleText>Clique para ver</SubTitleText>
                    </BudgetTextContainer>
                  </BudgetInfoContainer>

                  <BudgetInfoContainer
                    style={[{ borderTopLeftRadius: 8 }, styles.shadow]}
                  >
                    <SvgUri
                      width="40"
                      height="40"
                      uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/coupom.svg"
                    />
                    <BudgetTextContainer>
                      <TitleText style={{ color: colors.heading }}>
                        3 Campanhas participantes
                      </TitleText>
                      <SubTitleText>Clique para ver</SubTitleText>
                    </BudgetTextContainer>
                  </BudgetInfoContainer>

                  <BudgetInfoContainer
                    style={[{ borderTopLeftRadius: 8 }, styles.shadow]}
                  >
                    <SvgUri
                      width="40"
                      height="40"
                      uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/coupom.svg"
                    />
                    <BudgetTextContainer>
                      <TitleText style={{ color: colors.heading }}>
                        3 Campanhas participantes
                      </TitleText>
                      <SubTitleText>Clique para ver</SubTitleText>
                    </BudgetTextContainer>
                  </BudgetInfoContainer>

                  <BudgetInfoContainer
                    style={[{ borderTopLeftRadius: 8 }, styles.shadow]}
                  >
                    <SvgUri
                      width="40"
                      height="40"
                      uri="https://storage.googleapis.com/images-ahazo-dev/dev-images/coupom.svg"
                    />
                    <BudgetTextContainer>
                      <TitleText style={{ color: colors.heading }}>
                        3 Campanhas participantes
                      </TitleText>
                      <SubTitleText>Clique para ver</SubTitleText>
                    </BudgetTextContainer>
                  </BudgetInfoContainer>
                </BudgetContainer>

                <ActivityContainer>
                  <HeadingText>Atividades</HeadingText>
                </ActivityContainer>
              </ScrollView>
            </>
          )}
        </Container>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
    shadowColor: colors.body,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});
