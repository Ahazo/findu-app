import styled from 'styled-components/native';
import { height, width } from '../../constants';
import { TouchableOpacity } from 'react-native';
interface IContainerProps {
  containerHeight: number;
}

interface ILogoProps {
  dimensions?: {
    height?: number;
    width?: number;
  };
}

export const Container = styled.View`
  height: ${(props: IContainerProps) => props.containerHeight}px;
`;

export const Logo = styled.Image`
  width: ${(props: ILogoProps) => props.dimensions?.width || width * 0.25}px;
  height: ${(props: ILogoProps) => props.dimensions?.height || height * 0.1}px;
`;

export const BackButton = styled.TouchableOpacity``;
