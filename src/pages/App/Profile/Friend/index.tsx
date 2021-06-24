import React from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { user } from '../../../../utils/users';

import {
  ContainerInput,
  InputSearch,
  ContactItem,
  ContactImage,
  ContactInfo,
  ContactInfoText,
} from './styles';

export function Friends() {
  function inputSearchComponent() {
    return (
      <ContainerInput
        style={{
          elevation: 6,
        }}
      >
        <InputSearch placeholder="Procure um(a) amigo(a)..." />
        <TouchableOpacity>
          <Feather name="search" size={20} />
        </TouchableOpacity>
      </ContainerInput>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      {inputSearchComponent()}
      <FlatList
        data={user}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 130,
          paddingHorizontal: 20,
          marginTop: 10,
        }}
        renderItem={({ item, index }) => {
          return (
            <ContactItem
              style={{
                borderTopWidth: index > 0 ? 1 : 0,
              }}
            >
              <View>
                <ContactImage
                  source={{
                    uri: item.url,
                  }}
                  resizeMode="contain"
                />
              </View>
              <ContactInfo>
                <ContactInfoText>{item.name}</ContactInfoText>
              </ContactInfo>
              <View>
                <Feather name="user" size={20} color="#ccc" />
              </View>
            </ContactItem>
          );
        }}
      />
    </View>
  );
}
