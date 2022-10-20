import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import App from './App';

declare global {
  interface Window {
    naver_id_login: any;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        html {
          font-size: 10px;
        }
      `}
    />
    <App />
  </React.StrictMode>
);
