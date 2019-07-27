import { takeEvery, put, call } from 'redux-saga/effects';
import Toastify from "toastify-js";

import {
    ADD_TO_CART_ACTION,
    FETCH_CART_ACTION,
    DELETE_WITH_CART_ACTION,
    EDIT_CART_ACTION,
    addToCartStore,
    loadCartWithStore,
    deleteWithCartStore,
    editCartWithStore
} from './actions';

import {
    addToCartRequest,
    fetchCartRequest,
    deleteWithCartRequest,
    editCartRequest
} from 'api/cartRequest';

function* addToCart(action) {
    const { payload } = action;

    try {
        /*TODO*/
        payload.count = 1;

        const response = yield call(addToCartRequest, payload);

        console.log(response);

        if (response.status >= 201 && response.status <= 201) {
            yield put(addToCartStore(response.data));
        } else {
            console.log(response);
        }

        Toastify({
            text: "product added",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            className: "info",
        }).showToast();


    } catch (error) {
        console.log(error);
    }
}

function* deleteWithCart(action) {
    const { payload } = action;
    try {
        const response = yield call(deleteWithCartRequest, payload);

        if (response.status >= 200 && response.status <= 200) {
            yield put(deleteWithCartStore(payload));

            Toastify({
                text: "product deleted",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "info",
            }).showToast();

        } else {
            console.log(response);
        }

    } catch (error) {
        console.log(error);
    }
}

function* fetchCart(action) {
    const { payload } = action;

    try {
        const response = yield call(fetchCartRequest, payload);
        if (response.status >= 200 && response.status <= 200) {
            yield put(loadCartWithStore(response.data));
        } else {
            console.log(response);
        }

    } catch (error) {
        console.log(error);
    }
}

function* editCart(action) {
    const { payload } = action;

    try {
        const response = yield call(editCartRequest, payload);

        if (response.status >= 200 && response.status <= 200) {
            yield put(editCartWithStore(payload));

            Toastify({
                text: "product edited",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                className: "info",
            }).showToast();

        } else {
            console.log(response);
        }

    } catch (error) {
        console.log(error);
    }
}

export default function* foodsSaga() {
    yield takeEvery(ADD_TO_CART_ACTION, addToCart);
    yield takeEvery(FETCH_CART_ACTION, fetchCart);
    yield takeEvery(DELETE_WITH_CART_ACTION, deleteWithCart);
    yield takeEvery(EDIT_CART_ACTION, editCart);
}