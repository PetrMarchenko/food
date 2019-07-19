export const ADD_TO_CART   = 'ADD_TO_CART';
export const PUSH_TO_CART   = 'PUSH_TO_CART';

export const DELETE_FOOD_WITH_CART   = 'DELETE_FOOD_WITH_CART';
export const DELETE_FOOD_WITH_CART_REDUCER   = 'DELETE_FOOD_WITH_CART_REDUCER';

export const LOAD_TO_CART   = 'LOAD_TO_CART';
export const FETCH_CART   = 'FETCH_CART';

export const pushToCart = payload => ({
    type: PUSH_TO_CART,
    payload
});
export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
});


export const deleteWithCart = payload => ({
    type: DELETE_FOOD_WITH_CART,
    payload
});

export const deleteWithCartReducer = payload => ({
    type: DELETE_FOOD_WITH_CART_REDUCER,
    payload
});


export const fetchCart = payload => ({
    type: FETCH_CART,
    payload
});
export const loadToCart = payload => ({
    type: LOAD_TO_CART,
    payload
});