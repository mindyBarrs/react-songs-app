/* LIBRARIES */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* COMPONENT */
import App from './components/App';

/* REDUCERS */
import reducers from './reducers';


ReactDOM.render(
    <Provider store={ createStore(reducers) } >
        <App />
    </Provider>, 
    document.querySelector('#root')
);