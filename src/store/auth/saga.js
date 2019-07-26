import { takeEvery, put, call } from 'redux-saga/effects';
import {
    LOGIN_ACTION,
    addTokenToStore,
    LOGOUT_ACTION,
    deleteTokenWithStore,
} from './actions';

import { logInRequest } from 'api/auth';

function* LogIn(action) {
    const { payload } = action;

    console.log("LogInSaga", payload);

    try {
        const response = yield call(logInRequest, payload);
        console.log(response);
        if (response.status >= 200 && response.status <= 200) {
            yield put(addTokenToStore(response.data));
        } else {

        }

    } catch (error) {
        console.log(error);

    }
}

function* LogOut() {
    try {
        yield put(deleteTokenWithStore());

    } catch (error) {

    }
}


export default function* authSaga() {
    yield takeEvery(LOGIN_ACTION, LogIn);
    yield takeEvery(LOGOUT_ACTION, LogOut);
}
