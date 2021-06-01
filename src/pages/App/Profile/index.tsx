import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import Header from '../../../components/Header';
import { height, width } from '../../../constants';
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
  TabTextActive,
  Indication,
  ProfileIndicationContainer,
  TitleText,
  SubTitleText,
  BudgetContainer,
  BudgetInfoContainer,
  BudgetTextContainer,
  ActivityContainer
} from './styles';

import { SvgUri } from 'react-native-svg';
import { ProgressBar } from 'react-native-paper';

export function Profile() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, borderWidth: 1 }}>
        <Header
          heightPercentage={height * 0.3}
          logoDimensions={{ height: height * 0.13 }}
          hasSettingsButton
        />
        <Container>
          <UserInfoContainer>
            <UserInfoContent style={styles.shadow}>
              <ProfileContainer>
                <ProfilePhoto
                  source={{
                    uri: 'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
                  }}
                  resizeMode="contain"
                />
              </ProfileContainer>
              <InfoContainer>
                <UserName>Júlia Alves</UserName>
                <LevelDescription>Mestra da Indicação</LevelDescription>
                <LevelTitle>Nivel 3</LevelTitle>
                <ProgressBar progress={0.31} color={colors.purple_dark} style={{borderRadius: 47}}/>
              </InfoContainer>
              <BadgeContainer>
                <SvgUri
                  width="100"
                  height="100"
                  uri='https://storage.googleapis.com/images-ahazo-dev/dev-images/bagbadge.svg'
                  style={{
                    position: 'absolute',
                    top: -38,
                  }}
                />
              </BadgeContainer>
            </UserInfoContent>
          </UserInfoContainer>

          <ContainerIndication>
            <HeaderIndication>
              <HeadingText>
                Meu AHAZO
              </HeadingText>
              <TabNavigationContainer>
                <TabTextActive style={{marginRight: 10}}>
                  PERFIL
                </TabTextActive>
                <TabText>
                  AMIGOS
                </TabText>
              </TabNavigationContainer>
            </HeaderIndication>
            <ProfileIndicationContainer>
              <Indication style={styles.shadow}>
                <SvgUri
                  width="24"
                  height="24"
                  uri='https://storage.googleapis.com/images-ahazo-dev/dev-images/feedback.svg'
                />
                <View style={{ marginLeft: 10 }}>
                  <TitleText>
                    Indiquei
                  </TitleText>
                  <SubTitleText>
                    4 vezes
                  </SubTitleText>
                </View>
              </Indication>
              <Indication style={styles.shadow}>
                <SvgUri
                  width="24"
                  height="24"
                  uri='https://storage.googleapis.com/images-ahazo-dev/dev-images/discountblue.svg'
                />

                <View style={{ marginLeft: 10 }}>
                  <TitleText>
                    Ahazei
                  </TitleText>
                  <SubTitleText>
                    2 vezes
                  </SubTitleText>
                </View>
              </Indication>
            </ProfileIndicationContainer>
          </ContainerIndication>

          <BudgetContainer>
            <HeadingText>
              Minha Carteira
            </HeadingText>

            <BudgetInfoContainer style={[{borderTopLeftRadius: 8}, styles.shadow]}>
              <SvgUri
                width="40"
                height="40"
                uri='https://storage.googleapis.com/images-ahazo-dev/dev-images/recommendation.svg'
              />
              <BudgetTextContainer>
                <TitleText style={{color: colors.heading}}>
                  5 indicações adquiridas
                </TitleText>
                <SubTitleText>
                  Clique para ver
                </SubTitleText>
              </BudgetTextContainer>
            </BudgetInfoContainer>
            <BudgetInfoContainer style={[{borderTopLeftRadius: 8}, styles.shadow]}>
              <SvgUri
                width="40"
                height="40"
                uri='https://storage.googleapis.com/images-ahazo-dev/dev-images/coupom.svg'
              />
              <BudgetTextContainer>
                <TitleText style={{color: colors.heading}}>
                  3 Campanhas participantes
                </TitleText>
                <SubTitleText>
                  Clique para ver
                </SubTitleText>
              </BudgetTextContainer>
            </BudgetInfoContainer>
          </BudgetContainer>

          <ActivityContainer>
            <HeadingText>
              Atividades
            </HeadingText>
          </ActivityContainer>
        </Container>
      </SafeAreaView>
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
  }
})