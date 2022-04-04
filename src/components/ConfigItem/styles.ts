import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { height } from "../../constants";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import fontSizes from "../../styles/fontSizes";

export const Container = styled(TouchableOpacity)`
	width: 100%;
	height: ${height * 0.07}px;
	justifyContent: space-between;
	alignItems: center;
	flexDirection: row;
`;

export const Label = styled.Text`
	color: ${colors.body};
	fontFamily: ${fonts.text};
	fontSize: ${fontSizes.text};
`;