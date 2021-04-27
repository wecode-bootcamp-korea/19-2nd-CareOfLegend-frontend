import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Router from './Routes';

import theme from './Styles/theme';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </div>,
  document.getElementById('root')
);
