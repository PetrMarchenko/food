export const ADD_FOOD   = 'ADD_FOOD';
export const EDIT_FOOD   = 'EDIT_FOOD';
export const CREATE_FOOD   = 'CREATE_FOOD';

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
