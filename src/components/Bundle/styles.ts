import { SquircleView } from 'react-native-figma-squircle';
import styled from 'styled-components/native';
import { height, width } from '../../constants';
import colors from '../../styles/colors';

export const BundleItem = styled(SquircleView)`
	height: ${height * 0.35};
	width: ${height * 0.35};
	justify-content: center;
	align-items: center;
`;

export const InfoContainer = styled(SquircleView)`
	width: 100%;
	height: 25%;
	position: absolute;
	bottom: 0;
	padding: ${height * 0.015}px 0px 0px ${width * 0.05}px;
`;