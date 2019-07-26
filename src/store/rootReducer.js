import { combineReducers } from 'redux';
import foodsReducer from './foods/reducer';
import cartsReducer from './carts/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
    foodsReducer: foodsReducer,
    cartsReducer: cartsReducer,
    authReducer: authReducer
});

export default rootReducer;