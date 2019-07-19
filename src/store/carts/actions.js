export const ADD_TO_CART   = 'ADD_FOOD';
export const PUSH_TO_CART   = 'CREATE_FOOD';

export const DELETE_WITH_CART   = 'FETCH_FOOD';

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
    type: DELETE_WITH_CART,
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