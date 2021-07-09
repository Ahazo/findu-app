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

import { width, height } from '../../../constants/index';
import colors from '../../../styles/colors';

export default function ModalPostImage({
  photos,
  modalIsOpen,
  onChangeModalVisible,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollRef = useRef<ScrollView | null>(null);

  function scrollChange(nativeEvent: NativeScrollEvent) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
    console.log(nativeEvent.contentOffset.x);
  }

  useEffect(() => {
    const scroll = setTimeout(
      () => scrollRef.current?.scrollTo({ x: Math.ceil(width * 3), y: 0 }),
      0,
    );

    return () => {
      clearTimeout(scroll);
    };
  }, [modalIsOpen]);

  return (
    <Modal
      visible={modalIsOpen}
      animationType="fade"
      onRequestClose={() => {
        onChangeModalVisible(!modalIsOpen);
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
            ref={scrollRef}
            style={{ width, height: height / 2 }}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={e => scrollChange(e.nativeEvent)}
          >
            {photos.map((p, index) => (
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
            {photos.map((p, index) => (
              <View
                key={index}
                style={{
                  height: 10,
                  width: 10,
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
  );
}
