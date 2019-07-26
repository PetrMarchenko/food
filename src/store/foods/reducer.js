import {
    LOAD_FOOD_TO_STORE,
    DELETE_FOOD_WITH_STORE
} from './actions';

const INIT = {
  foods: [
  ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_FOOD_TO_STORE:
            console.log('LOAD_FOOD_TO_STORE', payload);
            return {
                ...state,
                foods: payload
            };
        case DELETE_FOOD_WITH_STORE:
            const foods = [...state.foods.filter(obj => obj.id!= payload.id )];
            return {
                ...state,
                foods: foods
            };
        default:
            return state;
    }
}
