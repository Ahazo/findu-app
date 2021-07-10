import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';

import Header from '../../../components/Header';
import { height } from '../../../constants';
import { posts } from '../../../utils/posts';
import Heart from '../../../components/Heart';
import Rating from '../../../components/Rating';
import PostImage from '../../../components/PostImage';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

interface PostProps {
  id: string;
  username: string;
  userPhotoUri: string;
  likeCount: number;
  rate: number;
  body: string;
  comments_count: number;
  photos: {
    uri: string;
  }[];
  establishment: {
    name: string;
  };
}
export function Explorer() {
  function renderCreateRating() {
    return (
      <View
        style={{
          marginTop: 20,
          borderColor: '#000',
          borderStyle: 'dashed',
          borderWidth: 1,
          borderRadius: 0.1,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          + Criar avaliação
        </Text>
      </View>
    );
  }

  function renderPost() {
    const inputPost = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 20,
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
                uri:
                  'https://storage.googleapis.com/images-ahazo-dev/dev-images/minhaGata.jpg',
              }}
              resizeMode="contain"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.grey,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              marginLeft: 10,
              marginRight: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
              flex: 1,
            }}
          >
            <TextInput
              style={{ flex: 1, backgroundColor: colors.grey, marginRight: 5 }}
              placeholder="Comentar..."
              placeholderTextColor={colors.body}
            />

            <TouchableOpacity>
              <Text
                style={{
                  color: colors.blue,
                  fontFamily: fonts.text,
                  fontSize: 16,
                }}
              >
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    const renderItem = ({ item }: { item: PostProps }) => {
      return (
        <View
          key={item.id}
          style={{
            marginTop: 20,
            paddingBottom: 20,
            elevation: 1,
            backgroundColor: colors.white,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 8,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          {/* CONTAINER IMAGE POST*/}
          <PostImage photos={item.photos} />

          {/* CONTAINER INFO POST */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            {/* IMAGE */}
            <View
              style={{
                height: 50,
                width: 50,
              }}
            >
              <Image
                source={{
                  uri: item.userPhotoUri,
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
                  fontSize: 20,
                  fontFamily: fonts.semibold,
                  color: colors.purple,
                }}
              >
                {item.username}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <Text style={{ fontSize: 12, fontFamily: fonts.text }}>
                  Avaliou
                </Text>
                <Text
                  style={{
                    color: colors.blue,
                    marginLeft: 4,
                    marginRight: 6,
                    fontFamily: fonts.text,
                    fontSize: 12,
                  }}
                >
                  {item.establishment.name}
                </Text>
                <Rating size={20} rate={4.7} color="#f5dd2a" />
              </View>
              <Text style={{ fontSize: 14, fontFamily: fonts.text }}>
                {item.body}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginRight: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, fontFamily: fonts.text, marginRight: 6 }}
              >
                {item.likeCount}
              </Text>
              <Heart size={20} liked={true} />
            </View>
          </View>

          <TouchableOpacity>
            <View style={{ marginLeft: 20, marginVertical: 15 }}>
              <Text
                style={{
                  color: colors.blue,
                  fontFamily: fonts.text,
                  fontSize: 16,
                }}
              >
                Ver todos {item.comments_count} comentários
              </Text>
            </View>
          </TouchableOpacity>
          {inputPost()}
        </View>
      );
    };

    // MAIN RETURN OF THE FUNCTION
    return (
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
      />
    );
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <Header
          heightPercentage={height * 0.2}
          position="flex-end"
          hasBackButton
          backButtonFakeStyle={{
            position: 'absolute',
            top: '65%',
            left: 20,
          }}
          logoDimensions={{ height: height * 0.07 }}
          contentStyle={{
            marginBottom: height * 0.07,
          }}
        />

        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          {renderCreateRating()}
          {renderPost()}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
