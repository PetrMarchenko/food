import {
    ADD_FOOD,
    LOAD_FOOD
} from './actions';

const INIT = {
  foods: [
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
