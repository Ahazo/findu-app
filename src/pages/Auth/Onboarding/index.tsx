import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import Button from '../../../components/Button';
import { SquircleView } from 'react-native-figma-squircle';

interface ISlider {
  currentPage: number;
}

interface IIntroProps {
  title: string;
  subtitle: string;
  imageSource: string;
  buttonText: string;
}

const { width, height } = Dimensions.get('window');

export function Onboarding() {
  const scrollRef = useRef<ScrollView | null>(null);
  const navigation = useNavigation();
  const [sliderState, setSliderState] = useState<ISlider>({ currentPage: 0 });

  const [introContent, setIntroContent] = useState<IIntroProps[]>([]);

  useEffect(() => {
    setIntroContent([
      {
        title: 'Indique e use indicações!',
        subtitle:
          'Indique marcas que são a sua cara e fique \npor dentro das indicações dos seus amigos.',
        imageSource:
          'https://storage.googleapis.com/images-ahazo-dev/dev-images/phone.png',
        buttonText: 'PRÓXIMA',
      },
      {
        title: 'Aqui as indicações são valiosas!',
        subtitle:
          'Receba cashback quando utilizar uma \nindicação de um(a) amigo(a) e também \nquando algum(a) amigo(a) usar a sua!',
        imageSource:
          'https://storage.googleapis.com/images-ahazo-dev/dev-images/bag.png',
        buttonText: 'PRÓXIMA',
      },
      {
        title: 'Use seu cashback Ahazo',
        subtitle:
          'Pague menos na sua próxima compra \ndentro das marcas que você ama e indica.',
        imageSource:
          'https://storage.googleapis.com/images-ahazo-dev/dev-images/happiness.png',
        buttonText: 'ENTRAR',
      },
    ]);
  }, []);

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x: axis } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(axis / width);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  const handleNextSlide = () => {
    const { currentPage } = sliderState;
    if (currentPage === 2) {
      navigation.navigate('SignIn');
    }

    scrollRef.current?.scrollTo({
      x: Math.floor(width * (currentPage + 1)),
      animated: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <LinearGradient
          colors={[colors.purple, colors.blue_light]}
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </View>
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}
      >
        {introContent.map((item, key) => {
          return (
            <View style={styles.contentContainer} key={key}>
              <View style={styles.headerContainer}>
                <SquircleView
									squircleParams={{
										cornerRadius: 30,
										cornerSmoothing: 1,
										fillColor: colors.offWhite
									}}
									style={styles.imageContainer}
								>
                  <Image
                    source={{ uri: item.imageSource }}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </SquircleView>
              </View>
              <View style={styles.wrapper}>
                <View style={styles.content}>
                  <View style={styles.contentText}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                  </View>
                  <View>
                    <Button text={item.buttonText} onPress={handleNextSlide} />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              { opacity: pageIndex === index ? 1 : 0.1 },
            ]}
            key={index}
          />
        ))}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: width,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    height: '45%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 40,
    padding: width * 0.1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: height * 0.2,
  },
  image: {
    width: width * 0.55,
    height: height * 0.3,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get('window').height * 0.2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentText: {
    alignItems: 'center',
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 22,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.body_light,
    fontSize: 16,
    marginTop: 15,
  },

  paginationWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.blue,
    marginLeft: 10,
  },
  skipButton: {
    position: 'absolute',
    right: 0,
    marginRight: width * 0.05,
    padding: 10,
  },
  skipButtonText: {
    color: colors.body_light,
    fontFamily: fonts.text,
    fontSize: 14,
  },
});
