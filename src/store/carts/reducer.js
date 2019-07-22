import {
    LOAD_TO_CART,
    ADD_TO_CART, DELETE_FOOD_WITH_CART_REDUCER
} from './actions';
import {EDIT_CART} from "store/carts/actions";


const INIT = {
    carts: [
        // {
        //     "id": 1,
        //     "name": "Бургер Энцо Феррари",
        //     "src": "/image.jpg",
        //     "price": 100,
        //     "count": 1
        // },
        // {
        //     "id": 2,
        //     "name": "Бургер Феррари",
        //     "src": "/image2.jpg",
        //     "price": 110,
        //     "count": 2
        // },
        // {
        //     "id": 3,
        //     "name": "Бургер Феррари",
        //     "src": "/image2.jpg",
        //     "price": 110,
        //     "count": 2
        // }
    ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART', payload);
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

        case EDIT_CART:
            console.log('EDIT_REDUCER', payload);

            const newCarts = [...state.carts];
            let foundIndex = newCarts.findIndex(element => element.id === payload.id);
            // const item = {...newCarts[foundIndex], count: payload.count };
            const item = {...newCarts[foundIndex], ...payload };

            newCarts.splice(foundIndex, 1, item);
            console.log(item);

            return {
                ...state,
                carts: newCarts
            };

        default:
            return state;
    }
}

