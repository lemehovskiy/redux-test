import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore({
    itemsList: [
        {
            id: 0,
            title: 'Title1'
        },
        {
            id: 1,
            title: 'Title2'
        }
    ]
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
