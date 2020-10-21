import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import postRecuder from './post_reducer';

const RootReducer = combineReducers({
    count: counterReducer,
    post: postRecuder
});

export default RootReducer;
