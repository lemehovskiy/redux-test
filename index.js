import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/rootReducer';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker'
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';



const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
    )
)

ReactDom.render(
        <Provider store={store}><App /></Provider>, document.getElementById('root')
    );
    registerServiceWorker();