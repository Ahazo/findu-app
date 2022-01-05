import styled from 'styled-components/native';
import { Dimensions, TextInput } from 'react-native';
import colors from '../../styles/colors';
const { width, height } = Dimensions.get('window');

type ContainerType = {
  error?: boolean;
};

export const ContainerInput = styled.View<ContainerType>`
  width: 100%;
  height: ${Dimensions.get('window').height * 0.08}px;
  background-color: #FEFEFE;
  margin-top: 10px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  flex-direction: row;

  border: ${props => (props.error ? '2px solid red' : colors.grey)};
`;

export const InputText = styled(TextInput)`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  /* ::placeholder {
    color: red;
  } */
`;
export const InputError = styled.Text`
  text-align: right;
  color: #fc5663;
  font-size: 12px;
  margin-top: 5px;
`;
