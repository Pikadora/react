import 'babel-polyfill';
import 'core-js/stable';
import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import ErrorBoundry from './components/error_boundry/error_boundry'
import './index.css';
import './responsive.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { Provider } from 'react-redux';
import locale from 'antd/lib/locale-provider/ru_RU';
import { ConfigProvider } from 'antd';
import DataService from './api/index';
import store from './store/store';
import {ServiceProvider} from './components/service-context/service_context'
import {getData} from './store/actions';

const dataService = new DataService();

store.dispatch(getData());

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider local={locale} >
      <ErrorBoundry>
        <ServiceProvider value={dataService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </ServiceProvider>
      </ErrorBoundry>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
