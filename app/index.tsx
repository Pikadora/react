import 'babel-polyfill';
import 'core-js/stable';
import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.css';
import './responsive.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { Provider } from 'react-redux';
import locale from 'antd/lib/locale-provider/ru_RU';
import { ConfigProvider } from 'antd';
import store from './store/store';
import {getUsersFromApi} from './store/actions/actions';

store.dispatch(getUsersFromApi());

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider local={locale} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
