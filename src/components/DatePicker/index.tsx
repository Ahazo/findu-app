import React, { useState } from 'react';
import { Platform, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
	InputContainer,
	TextContainer
} from './styles';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';

interface IDatePickerProps {
	label: string;
}

const DatePicker = (props: IDatePickerProps) => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [showDateAsLabel, setShowDateAsLabel] = useState(false)
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [hasError, setHasError] = useState(false);

	function onChange(event: any, date: Date | undefined) {
		if (date) {
			setSelectedDate(date);
			setShowDateAsLabel(true);
		}
	} 

	return (
		<>
			<InputContainer
				onTouchEnd={() => {
					setShowDatePicker(!showDatePicker);
					setShowDateAsLabel(true)
				}}	
			>
				<>
					<Feather
						name="calendar"
						color={hasError ? '#fc5663' : colors.body_light}
						size={24}
					/>
					<TextContainer>
						<Text
							style={{
								color: !showDateAsLabel || !selectedDate ? colors.body_light : colors.body,
								fontFamily: fonts.semibold,
								fontSize: fontSizes.text,
							}}
						>
							{!showDateAsLabel || !selectedDate ? props.label : selectedDate.toLocaleDateString('pt-BR')}
						</Text>
					</TextContainer>
				</>
			</InputContainer>
			{showDatePicker &&
				<DateTimePicker
					testID="dateTimePicker"
					locale="pt-br"
					value={selectedDate}
					onChange={onChange}
					themeVariant="light"
					style={{
						width: 320,
						backgroundColor: "white"
					}}
				/>
			}
		</>
	)
}

export default DatePicker;