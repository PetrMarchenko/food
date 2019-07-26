import {
    ADD_TOKEN_TO_STORE,
    DELETE_TOKEN_WITH_STORE
} from './actions';

const INIT = {
  token: ''
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TOKEN_TO_STORE:
            console.log('ADD_TOKEN_TO_STORE', payload);
            return {
                ...state,
                token: payload.token
            };
        case DELETE_TOKEN_WITH_STORE:
            console.log('DELETE_TOKEN_WITH_STORE', payload);
            return {
                ...state,
                token: ''
            };

        default:
            return state;
    }
}
