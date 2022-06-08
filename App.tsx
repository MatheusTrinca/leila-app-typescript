import React from 'react';
import { Home } from './src/pages/home';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
