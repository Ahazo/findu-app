import React, { useState, useEffect } from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';

import { IUserData } from '../../../utils/dtos/IUserData';

import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';

import { 
  Container,
  BannerProfileContainer,
  UserCardContainer,
  Content,
  UserCardContent,
  UserProfilePhoto,
  UserCardContentInfo,
} from './styles'
import fonts from '../../../styles/fonts';


export function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({} as IUserData);

  useEffect(() => {
    const loadUserData = async () => {
     
    };

    loadUserData();
  }, []);


  return (
    <>
      <Container>
        <BannerProfileContainer>
          <Image 
            source={{
              uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/banner.jpeg"
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </BannerProfileContainer>

        <Content>
          <UserCardContainer style={styles.shadowContainer}>
            <UserCardContent>
              <UserProfilePhoto>
                <Image 
                  source={{
                    uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg"
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </UserProfilePhoto>
              <UserCardContentInfo>
                  <View
                    style={{ 
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text style={{
                      fontSize: fontSizes.title,
                      color: colors.purple_dark,
                      fontFamily: fonts.heading,
                      marginRight: 5
                    }}>
                      Julia Alves
                    </Text>
                  
                    <Text style={{
                      fontSize: fontSizes.subTitle,
                      color: colors.body_light,
                      fontFamily: fonts.semibold
                    }}>
                      (Ela / Dela)
                    </Text>
                  </View>

                  <Text style={{
                    fontSize: fontSizes.text,
                    color: colors.body_light,
                    fontFamily: fonts.semibold
                  }}>
                    Programadora Python / Web
                  </Text>
                  <Text style={{
                    fontSize: fontSizes.subText,
                    color: colors.blue_light,
                    fontFamily: fonts.text
                  }}>
                    Igor e + 15 outros recomendam
                  </Text>

              </UserCardContentInfo>
            </UserCardContent>
          </UserCardContainer>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  }
})