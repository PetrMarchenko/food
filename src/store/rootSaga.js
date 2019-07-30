import { fork } from 'redux-saga/effects';
import foodsSaga from './foods/saga';
import cartsSaga from './carts/saga';
import authSaga from './auth/saga';
import userAdminSaga from './admin/users/saga';

export default function* rootSaga() {
  yield fork(foodsSaga);
  yield fork(cartsSaga);
  yield fork(authSaga);
  yield fork(userAdminSaga);
}
