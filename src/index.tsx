import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';
import { theme } from './style/theme';

declare global {
  interface Window {
    naver_id_login: any;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }
            html {
              font-size: 10px;
              font-family: 'Noto Sans KR', sans-serif;
            }
            a {
              text-decoration: none;
              color: inherit;
            }
            button {
              border: none;
              cursor: pointer;
            }
            input {
              font-family: 'Noto Sans KR';
            }

            @font-face {
              font-family: 'Noto Sans KR';
              src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700&display=swap');
            }
          `}
        />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
