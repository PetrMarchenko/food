import { fork } from 'redux-saga/effects';
import foodsSaga from './foods/saga';

export default function* rootSaga() {
    yield fork(foodsSaga);
}
