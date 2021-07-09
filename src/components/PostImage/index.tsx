import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  NativeScrollEvent,
  Alert,
} from 'react-native';

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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setPhoto(photos);
  }, [photos]);

  function handleImagePress() {
    setModalVisible(true);
  }

  function scrollChange(nativeEvent: NativeScrollEvent) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  }
  return (
    <View
      style={{
        height: 180,
        flexDirection: 'row',
      }}
    >
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {/* OVERLAY */}
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            height,
            justifyContent: 'center',
          }}
        >
          <View>
            <ScrollView
              style={{ width, height: height / 2 }}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              onScroll={e => scrollChange(e.nativeEvent)}
            >
              {photos2.map((p, index) => (
                <Image
                  key={index}
                  source={{
                    uri: p.uri,
                  }}
                  style={{
                    height: height / 2,
                    width: width,
                    resizeMode: 'contain',
                    backgroundColor: '#000',
                  }}
                />
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 4,
                alignSelf: 'center',
              }}
            >
              {photos2.map((p, index) => (
                <View
                  key={index}
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 10,
                    backgroundColor: colors.blue,
                    marginLeft: 10,
                    opacity: activeSlide === index ? 1 : 0.5,
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>

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
