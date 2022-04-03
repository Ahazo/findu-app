import React from 'react';
import { View, Image } from 'react-native';
import { height, ratio } from '../../constants';

const Header = () => {
  return (
    <View
			style={{
				marginTop: 10 * ratio
			}}
		>
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
