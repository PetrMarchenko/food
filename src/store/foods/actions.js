export const ADD_FOOD   = 'ADD_FOOD';
export const EDIT_FOOD   = 'EDIT_FOOD';
export const CREATE_FOOD   = 'CREATE_FOOD';
export const FETCH_FOOD   = 'FETCH_FOOD';
export const LOAD_FOOD   = 'LOAD_FOOD';
export const DELETE_FOOD   = 'DELETE_FOOD';
export const DELETE_FOOD_REDUCER   = 'DELETE_FOOD_REDUCER';

export const deleteFoodReducer = payload => ({
    type: DELETE_FOOD_REDUCER,
    payload
});

export const deleteFood = payload => ({
    type: DELETE_FOOD,
    payload
});

export const createFood = payload => ({
    type: CREATE_FOOD,
    payload
});

export const addFood = payload => ({
    type: ADD_FOOD,
    payload
});

export const editFood = payload => ({
    type: EDIT_FOOD,
    payload
});

export const fetchFood = payload => ({
    type: FETCH_FOOD,
    payload
});

export const loadFood = payload => ({
    type: LOAD_FOOD,
    payload
});
