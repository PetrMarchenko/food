import {
    ADD_FOOD,
} from './actions';
import {LOAD_FOOD} from "store/foods/actions";

const INIT = {
  foods: [
      {id: 1, name: 'Food1'},
      {id: 2, name: 'Food2'},
      {id: 3, name: 'Food2'},
      {id: 4, name: 'Food2'},
      {id: 5, name: 'Food2'},
  ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_FOOD:
            console.log(payload);
            const count = state.foods.length;
            payload.id = count + 1;

            return {
                ...state,
                foods: [
                    ...state.foods,
                    payload
                ]
            };
        case LOAD_FOOD:
            console.log(payload);
            return {
                ...state,
                foods: payload
            };
        default:
            return state;
    }
}
