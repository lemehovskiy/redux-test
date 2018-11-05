import { combineReducers } from 'redux';
import itemsList from './item';
import modal from './modal';
import addNewEditor from './addNewEditor';
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
  itemsList, modal, addNewEditor,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
