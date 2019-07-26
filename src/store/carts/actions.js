export const ADD_TO_CART_ACTION   = 'ADD_TO_CART_ACTION';
export const ADD_TO_CART_STORE   = 'ADD_TO_CART_STORE';

export const FETCH_CART_ACTION   = 'FETCH_CART_ACTION';
export const LOAD_CART_WITH_STORE   = 'LOAD_CART_WITH_STORE';

export const DELETE_WITH_CART_ACTION   = 'DELETE_WITH_CART_ACTION';
export const DELETE_WITH_CART_STORE   = 'DELETE_WITH_CART_STORE';

export const EDIT_CART_ACTION   = 'EDIT_CART_ACTION';
export const EDIT_CART_WITH_STORE   = 'EDIT_CART_WITH_STORE';

export const addToCartAction = payload => ({
    type: ADD_TO_CART_ACTION,
    payload
});
export const addToCartStore = payload => ({
    type: ADD_TO_CART_STORE,
    payload
});

export const deleteWithCartStore = payload => ({
    type: DELETE_WITH_CART_STORE,
    payload
});
export const deleteWithCartAction = payload => ({
    type: DELETE_WITH_CART_ACTION,
    payload
});

export const fetchCartAction = payload => ({
    type: FETCH_CART_ACTION,
    payload
});
export const loadCartWithStore = payload => ({
    type: LOAD_CART_WITH_STORE,
    payload
});

export const editCartWithStore = payload => ({
    type: EDIT_CART_WITH_STORE,
    payload
});
export const editCartAction = payload => ({
    type: EDIT_CART_ACTION,
    payload
});
