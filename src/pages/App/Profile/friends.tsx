import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { user } from '../../../utils/users';
import { height } from '../../../constants';
export function Friends() {
  function inputSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          flex: 1,
          elevation: 6,
          borderRadius: 25,
          padding: 15,
        }}
      >
        <TextInput
          style={{
            backgroundColor: '#fff',
            flex: 1,
            fontSize: 16,
            paddingHorizontal: 10,
          }}
          placeholder="Procure um(a) amigo(a)..."
        />
        <TouchableOpacity>
          <Feather name="search" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={user}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 130, paddingHorizontal: 20 }}
        ListHeaderComponent={inputSearch()}
        ListHeaderComponentStyle={{
          marginVertical: 15,
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              height: 60,
              marginHorizontal: 10,
              borderColor: '#e4e2e2',

              borderTopWidth: index > 0 ? 1 : 0,
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: item.url,
                }}
                resizeMode="contain"
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={{ flex: 2, marginLeft: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.name}
              </Text>
            </View>
            <View>
              <Feather name="user" size={20} color="#ccc" />
            </View>
          </View>
        )}
      />
    </View>
  );
}
