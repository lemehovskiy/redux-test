import { combineReducers } from 'redux';
import counter from './counter';
import events from './events';

const rootReducer = combineReducers({
  counter, events
});

export default rootReducer;
