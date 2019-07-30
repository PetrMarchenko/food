import { LOAD_USER_ADMIN_STORE } from './actions';

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
    default:
      return state;
  }
}

