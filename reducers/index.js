import { combineReducers } from 'redux';
import counter from './counter';
import itemsList from './item';

const rootReducer = combineReducers({
  counter, itemsList
});

export default rootReducer;
