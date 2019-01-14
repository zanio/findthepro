//Imported Package(s)from npm
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//Application imported modules
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import authReducer from './Store/reducers/Auth';

const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;


const rootReducer = combineReducers({
    authReducer:authReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}> 
    <BrowserRouter>
   <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
//registerServiceWorker();

if (module.hot) {
module.hot.accept();
}
