import { takeEvery, put, call } from 'redux-saga/effects';
import {
    PUSH_TO_CART,
    FETCH_CART,
    addToCart,
    loadToCart
} from './actions';
import { fetchAll } from 'api/CartList';

function* pushToCart(action) {
    const { payload } = action;

    try {
        yield put(addToCart(payload));

    } catch (error) {

    }
}

function* fetchCart(action) {
    const { payload } = action;

    console.log('fetchCart');

    try {
        const response = yield call(fetchAll, payload);

        console.log(response);
        if (response.status >= 200 && response.status <= 200) {
            yield put(loadToCart(response.data));
        } else {

        }

    } catch (error) {
        console.log(error);
    }
}

export default function* foodsSaga() {
    yield takeEvery(PUSH_TO_CART, pushToCart);
    yield takeEvery(FETCH_CART, fetchCart);
}