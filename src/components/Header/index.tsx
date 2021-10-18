import React from 'react';
import { View, Image } from 'react-native';
import { height } from '../../constants';

const Header = () => {
  return (
    <View>
      <Image
        style={{
          height: height*0.08,
        }}
        resizeMode="contain"
        source={{
          uri: 'https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo_violet.png'
        }}
      />
    </View>
  );
} 

export default Header;
