import { ScrollView } from 'react-native-gesture-handler';
import spacing from '../../../../../styles/spacing';

import styled from 'styled-components/native';
import { height } from '../../../../../constants';

export const Content = styled(ScrollView)`
	padding-left: ${spacing.content.paddingHorizontal}px;
	padding-right: ${spacing.content.paddingHorizontal}px;
	padding-top: ${height * 0.05}px;
	flex: 1;
`;

export const Container = styled.View`
	justify-content: flex-start;
	align-items: center;
`;

export const FormContainer = styled.View`
	margin-top: ${height * 0.025}px;
	margin-bottom: ${height * 0.07}px;
`;