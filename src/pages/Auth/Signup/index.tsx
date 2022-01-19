import React, { useRef } from 'react';
import {
  StyleSheet,
  TextInput,
	SafeAreaView,
	Platform,
	StatusBar,
	View,
	KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useStepper } from '../../../context/stepper';
import SingInStepper from './Steps';
import { Logo } from '../../../components/ColoredHeader/styles';
import { ScrollView } from 'react-native-gesture-handler';

type FormDataType = {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
  lastName: string;
  cellphoneNumber: string;
  cpf: string;
};



export function SignUp() {
  const navigation = useNavigation();

  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const mailRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const cellphoneNumberRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);

  function onSubmit(data: FormDataType) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.androidSafeAreaView}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<ScrollView 
					style={styles.container}
					contentContainerStyle={{
						alignItems: "center"
					}}
				  showsVerticalScrollIndicator={false}
				>
					<Logo
						resizeMode="contain"
						source={{
							uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/ahazo_violet.png"
						}}
					/>
					<SingInStepper/>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	androidSafeAreaView: {
    flex: 1,
		justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
	container: {
		flex: 1,
		paddingVertical: 15,
		marginHorizontal: 20,
	}
});
