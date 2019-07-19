import {
    LOAD_TO_CART,
    ADD_TO_CART, DELETE_FOOD_WITH_CART_REDUCER
} from './actions';


const INIT = {
    carts: [
    ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART', payload);
            // const count = state.carts.length;
            // payload.id = count + 1;

            return {
                ...state,
                carts: [
                    ...state.carts,
                    payload
                ]
            };
        case LOAD_TO_CART:
            console.log('LOAD_TO_CART', payload);

            return {
                ...state,
                carts: payload
            };

        case DELETE_FOOD_WITH_CART_REDUCER:
            console.log('DELETE_FOOD_WITH_CART_REDUCER', payload);
            const carts = [...state.carts.filter(obj => obj.id!= payload.id )];
            return {
                ...state,
                carts: carts
            };
        default:
            return state;
    }
}

