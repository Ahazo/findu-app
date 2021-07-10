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
  TouchableWithoutFeedback,
} from 'react-native';

import { width, height } from '../../../constants/index';
import colors from '../../../styles/colors';

interface ModalPostImageProps {
  photos: {
    uri: string;
  }[];
  modalIsOpen: boolean;
  onChangeModalVisible: (value: boolean) => void;
  slidePosition: number;
}

export default function ModalPostImage({
  photos,
  modalIsOpen,
  onChangeModalVisible,
  slidePosition,
}: ModalPostImageProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<ScrollView | null>(null);

  // PEGA O INDEX DA IMAGEM DO SLIDE ATUAL
  function scrollChange(nativeEvent: NativeScrollEvent) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  }

  function closeModal() {
    setActiveSlide(0); // RESETA O DOT DAS IMAGENS DO POST
    onChangeModalVisible(!modalIsOpen);
  }

  //AO CARREGAR O MODAL VAI PARA IMAGEM CLICADA NO POST
  useEffect(() => {
    const scroll = setTimeout(
      () =>
        scrollRef.current?.scrollTo({
          x: Math.ceil(width * slidePosition),
          y: 0,
        }),
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
      transparent
      onRequestClose={() => {
        onChangeModalVisible(!modalIsOpen);
      }}
    >
      {/* OVERLAY */}
      <TouchableWithoutFeedback onPress={closeModal}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      </TouchableWithoutFeedback>

      <View
        style={{
          height,
          justifyContent: 'center',
        }}
      >
        <View>
          <ScrollView
            ref={scrollRef}
            style={{
              width,
              height: height / 2,
            }}
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
          {photos.length > 1 && (
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
          )}
        </View>
      </View>
    </Modal>
  );
}
