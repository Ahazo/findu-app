import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { height, width } from '../../constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';
import { Container, Label } from './styles';

interface IConfigItem {
	label: string;
	onPress(): void;
}

const ConfigItem = (props: IConfigItem) => {
	return (
		<Container>
			<Label>
				{props.label}
			</Label>
			<Feather
				name="chevron-right"
				size={fontSizes.text}
			/>
		</Container>
	)
}

export default ConfigItem;