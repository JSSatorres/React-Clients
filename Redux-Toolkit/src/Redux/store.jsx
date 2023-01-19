import { createStore, compose, applyMiddleware } from 'redux';
import CombinedReducers from './reducers';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 
const appliedMiddleware = devTools ? compose(applyMiddleware(thunk), devTools) : compose(applyMiddleware(thunk));
const store = createStore(CombinedReducers, appliedMiddleware);

export default store;