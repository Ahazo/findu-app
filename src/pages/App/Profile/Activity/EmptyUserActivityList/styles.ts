import styled from 'styled-components/native';
import { height, width } from '../../../../../constants';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';

export const MessageText = styled.Text`
	font-family: ${fonts.text};
	font-size: ${fontSizes.subText}px;
	text-align: center;
`;

export const Container = styled.View`
	justify-content: space-around;
	align-items: center;
	padding: ${width * 0.02}px;
	height: ${height * 0.25}px;
`