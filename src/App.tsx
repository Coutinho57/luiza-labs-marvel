import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import Global from './styles/global';
import theme from './styles/theme';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
