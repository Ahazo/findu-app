import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';

import { IUserData } from '../../../utils/dtos/IUserData';
import colors from '../../../styles/colors';
import { height } from '../../../constants';

import { 
  Container,
  BannerProfileContainer,
  UserCardContainer,
  Content,
  UserCardContent
} from './styles'


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

        </BannerProfileContainer>

        <Content>
          <UserCardContainer>
            <UserCardContent>

            </UserCardContent>
          </UserCardContainer>
        </Content>
      </Container>
    </>
  );
}
