import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...[thunk]), //需要使用的中间件
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;