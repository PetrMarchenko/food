import { combineReducers } from 'redux';
import foodsReducer from './foods/reducer';
import cartsReducer from './carts/reducer';

const rootReducer = combineReducers({
    foodsReducer: foodsReducer,
    cartsReducer: cartsReducer
});

export default rootReducer;