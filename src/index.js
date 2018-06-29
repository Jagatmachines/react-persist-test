import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

ReactDOM.render(
    <Provider store={Store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();