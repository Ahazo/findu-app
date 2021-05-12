import styled from 'styled-components/native';
import { height, width } from '../../constants';

interface IContainerProps {
  containerHeight: number;
}

interface ILogoProps {
  dimensions?: {
    height?: number;
    width?: number;
  }
}

export const Container = styled.View`
  height: ${(props: IContainerProps) => props.containerHeight}%;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  borderBottomLeftRadius: 40px;
  borderBottomRightRadius: 40px;
  overflow: hidden;
  alignItems: center;
  justify-content: flex-start;
  paddingVertical: 60px;
`;

export const Logo = styled.Image`
  width: ${(props: ILogoProps) => props.dimensions?.width || width * 0.25}px;
  height: ${(props: ILogoProps) =>  props.dimensions?.height || height * 0.1}px;
`;

export const BackButton = styled.TouchableOpacity`

`;
