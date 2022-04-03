import styled from 'styled-components/native';
import { PixelRatio } from 'react-native';

const ratio = PixelRatio.get();

export const Container = styled.View`
	flex: 1;
	align-items: center;
	margin-top: ${10*ratio}px;
`;