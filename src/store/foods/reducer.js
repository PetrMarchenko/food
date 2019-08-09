import { DELETE_FOOD_WITH_STORE, LOAD_FOOD_TO_STORE } from './actions';

const INIT = {
  foods: []
};

export default function foodsReducer(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FOOD_TO_STORE:
      return {
        ...state,
        foods: payload
      };
    case DELETE_FOOD_WITH_STORE:
      const foods = [...state.foods.filter(obj => obj.id !== payload.id)];
      return {
        ...state,
        foods: foods
      };
    default:
      return state;
  }
}
