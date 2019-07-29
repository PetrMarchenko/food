import {
    ADD_TOKEN_TO_STORE,
    DELETE_TOKEN_WITH_STORE
} from './actions';
import {GUEST_ROLE,  ADMIN_ROLE, USER_ROLE} from "constants/auth/role";


const INIT = {
  token: '',
  role: GUEST_ROLE
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TOKEN_TO_STORE:
            console.log('ADD_TOKEN_TO_STORE', payload);
            return {
                ...state,
                token: payload.token,
                role: USER_ROLE
            };
        case DELETE_TOKEN_WITH_STORE:
            console.log('DELETE_TOKEN_WITH_STORE', payload);
            return {
                ...state,
                token: '',
                role: GUEST_ROLE
            };

        default:
            return state;
    }
}
