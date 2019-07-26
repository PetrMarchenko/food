import {
    LOAD_CART_WITH_STORE,
    DELETE_WITH_CART_STORE,
    EDIT_CART_WITH_STORE
} from "./actions";
import {ADD_TO_CART_STORE} from "store/carts/actions";

const INIT = {
    carts: [
    ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_CART_WITH_STORE:
            return {
                ...state,
                carts: payload
            };
        case DELETE_WITH_CART_STORE:
            const carts = [...state.carts.filter(obj => obj.id!= payload.id )];
            return {
                ...state,
                carts: carts
            };
        case EDIT_CART_WITH_STORE:
            const newCarts = [...state.carts];
            let foundIndex = newCarts.findIndex(element => element.id === payload.id);
            const item = {...newCarts[foundIndex], ...payload };
            newCarts.splice(foundIndex, 1, item);
            return {
                ...state,
                carts: newCarts
            };
        case ADD_TO_CART_STORE:
            return {
                ...state,
                carts: [
                    ...state.carts,
                    payload
                ]
            };

        default:
            return state;
    }
}

