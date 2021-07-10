import React, { useEffect, useRef, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import ModalPostImage from './ModalPostImage';

interface PostImageProps {
  photos: {
    uri: string;
  }[];
}

function PostImage({ photos }: PostImageProps) {
  const [photo, setPhoto] = useState(photos);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setPhoto(photos);
  }, [photos]);

  function handleImagePress(activeSlideIndex: number) {
    setActiveSlide(activeSlideIndex);
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
        photos={photo}
        modalIsOpen={modalVisible}
        onChangeModalVisible={setModalVisible}
        slidePosition={activeSlide}
      />
      {photo.length === 1 && (
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={() => handleImagePress(0)}
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
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => handleImagePress(0)}
          >
            <Image
              source={{
                uri: photo[0].uri,
              }}
              resizeMode="cover"
              style={{
                height: '100%',

                borderTopLeftRadius: 8,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => handleImagePress(1)}
          >
            <Image
              source={{
                uri: photo[1].uri,
              }}
              resizeMode="cover"
              style={{
                height: '100%',
                borderTopRightRadius: 40,
              }}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export default PostImage;
