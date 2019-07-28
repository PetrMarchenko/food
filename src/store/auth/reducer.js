import {
    ADD_TOKEN_TO_STORE,
    DELETE_TOKEN_WITH_STORE
} from './actions';

const INIT = {
  token: '',
  role: 'guest'
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TOKEN_TO_STORE:
            console.log('ADD_TOKEN_TO_STORE', payload);
            return {
                ...state,
                token: payload.token,
                role: 'user'
            };
        case DELETE_TOKEN_WITH_STORE:
            console.log('DELETE_TOKEN_WITH_STORE', payload);
            return {
                ...state,
                token: '',
                role: 'guest'
            };

        default:
            return state;
    }
}
