import React, { useEffect, useState } from 'react';

import LottieView from 'lottie-react-native';
import { Animated, StyleSheet, View } from 'react-native';
import { height, width } from '../../constants';

const Loading = () => {
	const [progress, setProgress] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(progress, {
					toValue: 1,
					duration: 5000,
					delay: 500,
					useNativeDriver: true,
				}),
				Animated.timing(progress, {
					toValue: 0,
					duration: 5000,
					useNativeDriver: true,
				})
			]),
		).start()
	}, [])

	return (
		<View style={styles.container}>
			<LottieView
				style={{
					width: width * 0.15,
					height: height * 0.15,
				}}
				source={require('../../../assets/animations/loading.json')}
				progress={progress}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	}
})

export default Loading;