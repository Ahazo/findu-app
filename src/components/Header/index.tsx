import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
  return (
    <View>
      <Image
        style={{
          borderWidth: 1,
          borderColor: 'red',
          height: "100%"
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
