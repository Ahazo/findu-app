import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Container } from './styles';

interface IActivity {
	type: 'contract' | 'canceled' | 'recommendation' | 'joined';
	referredUser: {
		name: string;
		photoUrl: string;
	};
	details: {
		area: string;
		skill: string;
	}
}

const Activities = (activities: IActivity[]) => {
	return (
		<Container>
			{activities.map((activity) => {
				let iconName = 
				activity.type === 'contract' ? 'dollar-sign' 
				: activity.type === 'canceled' ? 'x'
					: activity.type === 'recommendation' ? 'arrow-up' 
					: 'award'

				let color = 
				activity.type === 'contract' ? 'dollar-sign' 
				: activity.type === 'canceled' ? 'x'
					: activity.type === 'recommendation' ? 'arrow-up' 
					: 'award'

				return (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
					>
						<View>
							<SquircleView
								squircleParams={{
									cornerRadius: 25,
									cornerSmoothing: 1,
								}}
							>
							</SquircleView>
							<View>
								<Feather
									name={}
								/>
							</View>
						</View>
						<View>

						</View>
					</View>
				)
			})}
		</Container>
	)
}