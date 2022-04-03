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
import { FieldErrors } from 'react-hook-form';

interface IDatePickerProps {
	label: string;
	inputValue: any;
  errors: FieldErrors;
  inputField: string;
	onChange(value: any): void;
}

const DatePicker = (props: IDatePickerProps) => {
	const [showDateAsLabel, setShowDateAsLabel] = useState(false)
	const [showDatePicker, setShowDatePicker] = useState(false);

	const isDateValid = (showDateAsLabel || props.inputValue) && props.inputValue.getDate() !== new Date().getDate();

	function handleChange(event: any, date: Date | undefined) {	
		if (date) {
			props.onChange(date);
			setShowDateAsLabel(true);
			Platform.OS === 'android' && setShowDatePicker(false);
		}
	} 

	return (
		<>
			<InputContainer
				onTouchEnd={() => {
					setShowDatePicker(!showDatePicker);
					setShowDateAsLabel(true)
				}}	
				error={Boolean(props.errors[props.inputField])}
			>
				<>
					<Feather
						name="calendar"
						color={Boolean(props.errors[props.inputField]) ? '#fc5663' : colors.body_light}
						size={24}
					/>
					<TextContainer>
						<Text
							style={{
								color: !isDateValid ? colors.body_light : colors.body,
								fontFamily: fonts.text,
								fontSize: fontSizes.text,
							}}
						>
							{!isDateValid ? props.label : props.inputValue.toLocaleDateString('pt-BR')}
						</Text>
					</TextContainer>
				</>
			</InputContainer>
			{showDatePicker &&
				<DateTimePicker
					mode="date"
					testID="dateTimePicker"
					locale="pt-br"
					value={props.inputValue}
					onChange={handleChange}
					themeVariant="light"
					style={{
						width: 320,
						backgroundColor: "white",
					}}
				/>
			}
		</>
	)
}

export default DatePicker;