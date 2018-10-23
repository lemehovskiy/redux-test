import { combineReducers } from 'redux';
import counter from './counter';
import itemsList from './item';
import modal from './modal';

const rootReducer = combineReducers({
  counter, itemsList, modal
});

export default rootReducer;
