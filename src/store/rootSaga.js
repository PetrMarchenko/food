import { fork } from 'redux-saga/effects';
import foodsSaga from './foods/saga';
import cartsSaga from './carts/saga';

export default function* rootSaga() {
    yield fork(foodsSaga);
    yield fork(cartsSaga);
}
