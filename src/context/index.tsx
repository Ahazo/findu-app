import React from 'react';
import AuthProvider from './auth';

const AppGlobalProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppGlobalProvider;