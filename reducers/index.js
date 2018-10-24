import { combineReducers } from 'redux';
import itemsList from './item';
import modal from './modal';
import addNewEditor from './addNewEditor';

const rootReducer = combineReducers({
  itemsList, modal, addNewEditor
});

export default rootReducer;
