import { combineReducers } from 'redux';
import foodsReducer from './foods/reducer';
import cartsReducer from './carts/reducer';
import authReducer from './auth/reducer';
import usersAdminReducer from './admin/users/reducer';

const rootReducer = combineReducers({
  foodsReducer: foodsReducer,
  cartsReducer: cartsReducer,
  authReducer : authReducer,
  usersAdminReducer: usersAdminReducer
});

export default rootReducer;