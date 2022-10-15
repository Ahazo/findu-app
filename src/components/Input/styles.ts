import styled from 'styled-components/native';
import { Dimensions, TextInput } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import fontSizes from '../../styles/fontSizes';
import { SquircleView } from 'react-native-figma-squircle';
import { height } from '../../constants';

type ContainerType = {
  error?: boolean;
	isMultiline: boolean | null;
};

type TitleType = {
	error?: boolean;
}

export const ContainerInput = styled(SquircleView)<ContainerType>`
  width: 100%;
  height: ${props => (props.isMultiline ? Dimensions.get('window').height * 0.175 : Dimensions.get('window').height * 0.075)}px;
  background-color: #FEFEFE;
  margin-top: 10px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: ${props => (props.isMultiline ? "flex-start" : "center")};
  padding: ${props => (props.isMultiline ? "20px 15px" : "0 15px")};
  flex-direction: row; 
  border: ${props => (props.error ? '2px solid red' : colors.grey)};
`;

export const InputText = styled(TextInput)`
  width: 100%;
  height: 100%;
  padding-left: 10px;
	font-family: ${fonts.text};
	font-size: ${fontSizes.text}px;
	color: ${colors.body};
	align-items: ${props => (props.multiline ? "flex-start":"center")}
`;

export const InputError = styled.Text`
  text-align: left;
  color: #fc5663;
  font-size: 12px;
  margin-top: 5px;
	width: ${Dimensions.get('screen').width * 0.8}px;
`;

export const TopPlaceholder = styled.Text<TitleType>`
	text-align: left;
	color: ${props => (props.error? "#fc5663" : colors.body_light)};
	font-size: ${fontSizes.text};
	margin-top: ${height * 0.02}px;
	width: ${Dimensions.get('screen').width * 0.8}px;
`;