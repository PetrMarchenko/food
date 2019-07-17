import { takeEvery, put, call } from 'redux-saga/effects';
import {
    CREATE_FOOD,
    FETCH_FOOD,
    addFood,
    loadFood
} from './actions';
import { fetchAll } from 'api/foodList';

function* CreateFood(action) {
    const { payload } = action;

    try {
        yield put(addFood(payload));

    } catch (error) {

    }
}

function* fetchFood(action) {
    const { payload } = action;

    try {
        const response = yield call(fetchAll, payload);

        console.log(response);
        if (response.status >= 200 && response.status <= 200) {
            yield put(loadFood(response.data));
        } else {

        }

    } catch (error) {
        console.log(error);
    }
}

export default function* foodsSaga() {
    yield takeEvery(CREATE_FOOD, CreateFood);
    yield takeEvery(FETCH_FOOD, fetchFood);
}
