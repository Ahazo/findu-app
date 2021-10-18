import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type UserCommentProps = {
  username: string;
  userPhotos: {
    uri: string;
  };
};

export function Explorer() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
