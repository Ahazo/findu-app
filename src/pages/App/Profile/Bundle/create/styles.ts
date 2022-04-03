import styled from 'styled-components/native';
import colors from '../../../../../styles/colors';
import fonts from '../../../../../styles/fonts';
import fontSizes from '../../../../../styles/fontSizes';

export const Title = styled.Text`
	color: ${colors.purple};
	font-size: ${fontSizes.title}px;
	font-family: ${fonts.semibold};
	letter-spacing: 0.3px;
`;