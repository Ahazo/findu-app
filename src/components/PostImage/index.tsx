import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { width, height } from '../../constants/index';
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

  useEffect(() => {
    setPhoto(photos);
  }, [photos]);

  function handleImagePress() {
    console.log('IMAGE');
  }
  return (
    <View
      style={{
        height: 180,
        flexDirection: 'row',
      }}
    >
      <Modal visible={true}>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <ScrollView
            style={{ width, height }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {photos2.map((p, index) => (
              <>
                <Image
                  source={{
                    uri: p.uri,
                  }}
                  style={{
                    height: height,
                    width: width,
                    resizeMode: 'contain',
                  }}
                />
              </>
            ))}
          </ScrollView>
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
