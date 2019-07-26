import { fork } from 'redux-saga/effects';
import foodsSaga from './foods/saga';
import cartsSaga from './carts/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
    yield fork(foodsSaga);
    yield fork(cartsSaga);
    yield fork(authSaga);
}
