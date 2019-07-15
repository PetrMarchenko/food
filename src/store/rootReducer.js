import { combineReducers } from 'redux';
import foodsReducer from './foods/reducer';

const rootReducer = combineReducers({
    foodsReducer: foodsReducer
});

export default rootReducer;