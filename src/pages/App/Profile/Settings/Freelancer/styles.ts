import styled from 'styled-components/native';
import colors from '../../../../../styles/colors';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';
import spacing from '../../../../../styles/spacing';

export const Container = styled.View`
	flex: 1;
	paddingHorizontal: ${spacing.content.paddingHorizontal}px;
`;

export const InfoHeader = styled.Text`
	font-family: ${fonts.semibold}};
	font-size: ${fontSizes.title}px;
	color: ${colors.body};
`;

export const MessageContainer = styled(Container)`
	justify-content: space-around;
	align-items: center;
`;

export const InfoText = styled.Text`
	font-family: ${fonts.semibold};
	font-size: ${fontSizes.text}px;
	color: ${colors.body};
`;