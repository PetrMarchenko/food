import { LOAD_USER_ADMIN_STORE } from './actions';
import { EDIT_CART_WITH_STORE } from 'store/carts/actions';

const INIT = {
  users: []
};

export default function usersAdminReducer(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_ADMIN_STORE:
      return {
        ...state,
        users: payload
      };
    // case EDIT_USER_ADMIN_STORE:
    //   const data = [...state.users];
    //   let foundIndex = data.findIndex(element => element.id === payload.id);
    //   const item = { ...data[foundIndex], ...payload };
    //   data.splice(foundIndex, 1, item);
    //   return {
    //     ...state,
    //     users: data
    //   };
    default:
      return state;
  }
}

