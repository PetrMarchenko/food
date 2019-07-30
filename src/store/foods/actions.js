export const ADD_FOOD_ACTION = 'ADD_FOOD_ACTION';
export const ADD_FOOD_WITH_STORE = 'ADD_FOOD_WITH_STORE';

export const FETCH_FOOD_ACTION = 'FETCH_FOOD_ACTION';
export const LOAD_FOOD_TO_STORE = 'LOAD_FOOD_TO_STORE';

export const DELETE_FOOD_ACTION = 'DELETE_FOOD_ACTION';
export const DELETE_FOOD_WITH_STORE = 'DELETE_FOOD_WITH_STORE';

export const EDIT_FOOD_ACTION = 'EDIT_FOOD_ACTION';
export const EDIT_FOOD_WITH_STORE = 'EDIT_FOOD_WITH_STORE';

export const fetchFoodAction = payload => ({
  type: FETCH_FOOD_ACTION,
  payload
});

export const loadFoodToStore = payload => ({
  type: LOAD_FOOD_TO_STORE,
  payload
});
export const deleteFoodStore = payload => ({
  type: DELETE_FOOD_WITH_STORE,
  payload
});