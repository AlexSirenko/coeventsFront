import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'

import { rootReducer } from './reducers/index'
import RoutesContainer from './routes/RoutesContainer'

import {loadState, saveState} from './localStorage/localStorage'

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )    
);

store.subscribe(()=> {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RoutesContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
