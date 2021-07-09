import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  NativeScrollEvent,
  Button,
} from 'react-native';

import ModalPostImage from './ModalPostImage';

import { width, height } from '../../constants/index';
import colors from '../../styles/colors';
interface PostImageProps {
  photos: {
    uri: string;
  }[];
}

const photos2 = [
  {
    uri:
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    uri:
      'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

function PostImage({ photos }: PostImageProps) {
  const [photo, setPhoto] = useState(photos);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setPhoto(photos);
  }, [photos]);

  function handleImagePress() {
    setModalVisible(true);
  }

  return (
    <View
      style={{
        height: 180,
        flexDirection: 'row',
      }}
    >
      <ModalPostImage
        photos={photos2}
        modalIsOpen={modalVisible}
        onChangeModalVisible={setModalVisible}
      />
      {photo.length === 1 && (
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={handleImagePress}
        >
          <Image
            source={{
              uri: photo[0].uri,
            }}
            resizeMode="cover"
            style={{
              height: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 40,
            }}
          />
        </TouchableOpacity>
      )}

      {photo.length === 2 && (
        <>
          <Image
            source={{
              uri: photo[0].uri,
            }}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '50%',
              borderTopLeftRadius: 8,
            }}
          />
          <Image
            source={{
              uri: photo[1].uri,
            }}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '50%',
              borderTopRightRadius: 40,
            }}
          />
        </>
      )}
    </View>
  );
}

export default PostImage;
