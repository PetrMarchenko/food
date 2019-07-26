import {
    ADD_FOOD,
    LOAD_FOOD,
    DELETE_FOOD_REDUCER
} from './actions';


const INIT = {
  foods: [
  ]
};

export default function foodsReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_FOOD:
            console.log('ADD_FOOD', payload);
            const count = state.foods.length;
            // payload.id = count + 1;

            return {
                ...state,
                foods: [
                    ...state.foods,
                    payload
                ]
            };
        case LOAD_FOOD:
            console.log('LOAD_FOOD', payload);
            return {
                ...state,
                foods: payload
            };
        case DELETE_FOOD_REDUCER:
            console.log('DELETE_FOOD_REDUCER', payload);
            const foods = [...state.foods.filter(obj => obj.id!= payload.id )];
            return {
                ...state,
                foods: foods
            };
        default:
            return state;
    }
}
