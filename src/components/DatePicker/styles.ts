import { Dimensions } from 'react-native';
import styled from 'styled-components/native'
import colors from '../../styles/colors';

type ContainerType = {
  error?: boolean;
};

export const InputContainer = styled.View<ContainerType>`
  width: 100%;
  height: ${Dimensions.get('window').height * 0.08}px;
  background-color: #FEFEFE;
  margin-top: 10px;
  border-radius: 15px;
  align-items: center;
	padding: 0 15px;
  flex-direction: row;

  border: ${props => (props.error ? '2px solid red' : colors.grey)};
`;

export const TextContainer = styled.View`
	width: 100%;
	height: 100%;
	padding-left: 10px;
	justify-content: center;
`
