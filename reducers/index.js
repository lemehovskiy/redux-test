import { combineReducers } from 'redux';
import itemsList from './item';
import modal from './modal';

const rootReducer = combineReducers({
  itemsList, modal
});

export default rootReducer;
