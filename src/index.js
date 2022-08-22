import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFonts />
      <App />
    </Provider>
  </React.StrictMode>
);
