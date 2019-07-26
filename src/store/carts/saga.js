import { takeEvery, put, call } from 'redux-saga/effects';
import {
    PUSH_TO_CART,
    FETCH_CART,
    addToCart,
    loadToCart,
    deleteWithCartReducer,
    DELETE_FOOD_WITH_CART
} from './actions';

import { fetchAll, add, deleteFoodWithCart } from 'api/cartList';
import {
    deleteFood
} from 'store/foods/actions';


import Toastify from "toastify-js";

function* pushToCart(action) {
    const { payload } = action;

    try {
        console.log('pushToCart Saga', payload);
        // payload.id = payload.id + 1;
        payload.count = 1;

        const response = yield call(add, payload);

        console.log('response', response);
        yield put(addToCart(response.data));


        Toastify({
            text: "product added",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "info",
        }).showToast();

        console.log('deleteFood', response);
        yield put(deleteFood(response.data));

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
        const response = yield call(deleteFoodWithCart, payload);
        // const response = payload;

        console.log("deleteWithCart", response);
        // yield put(deleteWithCartReducer(payload));

        if (response.status >= 200 && response.status <= 200) {
            yield put(deleteWithCartReducer(payload));

            Toastify({
                text: "product deleted",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "info",
            }).showToast();
        } else {

        }

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