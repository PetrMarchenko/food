import {
    LOAD_TO_CART,
    ADD_TO_CART
} from './actions';


const INIT = {
    carts: [
    ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            console.log(payload);
            const count = state.carts.length;
            payload.id = count + 1;

            return {
                ...state,
                carts: [
                    ...state.carts,
                    payload
                ]
            };
        case LOAD_TO_CART:
            console.log(payload);
            return {
                ...state,
                carts: payload
            };
        default:
            return state;
    }
}