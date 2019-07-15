import { takeEvery, put } from 'redux-saga/effects';
import {
    CREATE_FOOD,
    addFood
} from './actions';

function* CreateFood(action) {
    const { payload } = action;

    try {
        yield put(addFood(payload));

    } catch (error) {

    }
}

export default function* foodsSaga() {
    yield takeEvery(CREATE_FOOD, CreateFood);
}
