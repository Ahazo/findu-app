import React from 'react';
import StepperProvider from './stepper';
import AuthProvider from './auth';

const AppGlobalProvider: React.FC = ({ children }) => (
  <StepperProvider>
		<AuthProvider>
			{children}
		</AuthProvider>
	</StepperProvider>
);

export default AppGlobalProvider;