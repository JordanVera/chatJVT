import React from 'react';
import ReactDOM from 'react-dom/client';
import App_New from './components/App_new';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/main.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#30BCED',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App_New />
    </ThemeProvider>
  </React.StrictMode>
);
