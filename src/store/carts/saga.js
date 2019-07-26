import { takeEvery, put, call } from 'redux-saga/effects';
import {
    PUSH_TO_CART,
    FETCH_CART,
    addToCart,
    loadToCart,
    deleteWithCartReducer,
    DELETE_FOOD_WITH_CART
} from './actions';

import {
    deleteFood
} from 'store/foods/actions';

import { fetchAll, add } from 'api/cartList';
import Toastify from "toastify-js";

function* pushToCart(action) {
    const { payload } = action;

    try {
        console.log('pushToCart Saga', payload);
        const response = yield call(add, payload);

        console.log('response', response);
        yield put(addToCart(response));


        Toastify({
            text: "product added",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "info",
        }).showToast();

        console.log('deleteFood', response);
        yield put(deleteFood(response));

        // if (response.status >= 200 && response.status <= 200) {
        //     yield put(addToCart(response.data));
        // } else {
        //
        // }
    } catch (error) {

    }
}



function* deleteWithCart(action) {
    const { payload } = action;

    console.log('deleteWithCart');

    try {
        // const response = yield call(fetchAll, payload);
        const response = payload;

        console.log(response);
        yield put(deleteWithCartReducer(response));

        // if (response.status >= 200 && response.status <= 200) {
        //     yield put(deleteWithCartReducer(response.data));
        // } else {
        //
        // }

    } catch (error) {
        console.log(error);
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
    yield takeEvery(DELETE_FOOD_WITH_CART, deleteWithCart);
}