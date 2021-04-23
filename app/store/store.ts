import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../store/reducers';
const middleware = [thunk, createLogger({ collapsed: true })];
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;