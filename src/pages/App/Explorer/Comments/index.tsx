import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import fonts from '../../../../styles/fonts';
import colors from '../../../../styles/colors';

type UserCommentProps = {
  username: string;
  userPhotos: {
    uri: string;
  };
};
type CommentsProps = {
  user: UserCommentProps;
  content: string;
};

type UserProps = {
  name: string;
  photo: string;
  text: string;
};

type StackParamList = {
  Comments: {
    comments: CommentsProps[];
    user: UserProps;
  };
};

//TIPAR NAVIGATION
type CommentsScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Comments'
>;
// TIPAR ROUTE
type CommentsScreenRouteProp = RouteProp<StackParamList, 'Comments'>;

type Props = {
  navigation: CommentsScreenNavigationProp;
  route: CommentsScreenRouteProp;
};

export function Comments({ route, navigation }: Props) {
  const { comments, user } = route.params;

  const renderItem = ({ item }: { item: CommentsProps }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        <View
          style={{
            height: 35,
            width: 35,
          }}
        >
          <Image
            source={{
              uri: item.user.userPhotos.uri,
            }}
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
            }}
          />
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: fonts.extrabold }}>
            {item.user.username}
          </Text>
          <Text style={{ fontSize: 14, fontFamily: fonts.text }}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, marginTop: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>

        <Text
          style={{ marginLeft: 10, fontSize: 22, fontFamily: fonts.semibold }}
        >
          Comentários
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginTop: 20,
            marginLeft: 15,
          }}
        >
          <View
            style={{
              height: 35,
              width: 35,
            }}
          >
            <Image
              source={{
                uri: user.photo,
              }}
              resizeMode="contain"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.extrabold,
                color: colors.purple,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ fontSize: 14, fontFamily: fonts.text }}>
              {user.text}
            </Text>
          </View>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={comments}
          renderItem={renderItem}
          keyExtractor={item => item.user.username}
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
