import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store.js';
import axios from 'axios';
import { Provider } from 'react-redux';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { CookiesProvider } from 'react-cookie';

axios.defaults.baseURL = 'https://ecommerceapipublic-2.saghirahmad.repl.co';
axios.defaults.withCredentials = true;

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
