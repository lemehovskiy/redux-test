import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {reduxFirestore, getFireStore} from 'redux-firestore';
import {reactReduxFirebase, getFireBase} from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';

export let isMonitorAction;
export default function configureStore(preloadedState) {

    const store = createStore(
        reducer,
        {},
        compose(
            applyMiddleware(thunk.withExtraArgument({getFireStore, getFireBase}),
                reduxFirestore(fbConfig),
                reactReduxFirebase(fbConfig)
            )
        )
    );

    return store;
}
