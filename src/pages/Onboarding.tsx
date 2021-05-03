import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import cel from '../assets/cel.png';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

export function Onboarding() {
  const navigation = useNavigation();

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
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
        />
      </View>
      <View style={styles.headerContainer}>    
        <View style={styles.imageContainer}>
          <Image
            source={cel}
            resizeMode='contain'
            style={styles.image}
          >
          </Image>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.contentText}>
            <Text style={styles.title}>
              Indique e use indicações!
            </Text>
            <Text style={styles.subtitle}>
              Indique marcas que são a sua cara e fique {'\n'}
              por dentro das indicações dos seus amigos!
            </Text>
          </View>
          <View style={styles.contentButton}>
            <LinearGradient
              colors={[colors.purple, colors.blue_light]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={{ borderRadius: 22 }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  PRÓXIMA
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundContainer: {
    flex: 1,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    position: 'absolute'
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 40,
    padding: Dimensions.get('window').width * 0.1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: Dimensions.get('window').height * 0.2,
  },
  image: {
    width: Dimensions.get('window').width * 0.55,
    height: Dimensions.get('window').height * 0.3,
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
    justifyContent: 'space-between'
  },
  contentText: {
    alignItems: 'center'
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
  },
  contentButton: {

  },
  button: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.get('screen').height * 0.02,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 16,
    letterSpacing: 1,
  },
})