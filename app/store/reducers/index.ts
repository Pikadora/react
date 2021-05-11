import { combineReducers } from 'redux';
import rights from './rights';
import accordion from './accordion';

const Reducers = combineReducers({
    rights,
    accordion,
});

export default Reducers;