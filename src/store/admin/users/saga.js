import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_USER_ADMIN_ACTION,
  loadUserAdminStore
} from './actions';

import { fetchUserRequest } from 'api/admin/userRequest';

function* fetchUserAdmin(action) {
  const { payload } = action;

  try {
    const response = yield call(fetchUserRequest, payload);

    console.log(response);

    if (response.status >= 200 && response.status <= 200) {
      yield put(loadUserAdminStore(response.data));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}


export default function* foodsSaga() {
  yield takeEvery(FETCH_USER_ADMIN_ACTION, fetchUserAdmin);
}