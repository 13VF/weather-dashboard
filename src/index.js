import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import 'normalize.css';

import CombindedReducer from './reducers/cities';

import App from './app.js';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, CombindedReducer);

const loggerMiddleware = createLogger();
const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const Wrapper = () => {
    return (
        <Provider store={ store }>
            <PersistGate loading={null} persistor={ persistStore(store) }>
                <App />
            </PersistGate>
        </Provider>
    );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));
