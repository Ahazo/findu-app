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

import SingInStepper from './Steps';
import { Logo } from '../../../components/ColoredHeader/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { height } from '../../../constants';

export function SignUp() {
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
						resizeMode="cover"
						source={{
							uri: "https://storage.googleapis.com/images-ahazo-dev/dev-images/logo/AF_logo_findu_af_findu_roxo.png"
						}}
						dimensions={{
							width: height * 0.28,
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
