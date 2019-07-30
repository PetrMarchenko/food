import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_FOOD_ACTION, loadFoodToStore, } from './actions';

import { fetchFoodRequest } from 'api/foodRequest';

function* fetchFood(action) {
  const { payload } = action;
  try {
    const response = yield call(fetchFoodRequest, payload);

    if (response.status >= 200 && response.status <= 200) {
      yield put(loadFoodToStore(response.data));
    } else {
      console.log(response);
    }

  } catch (error) {
    console.log(error);
  }
}

export default function* foodsSaga() {
  yield takeEvery(FETCH_FOOD_ACTION, fetchFood);
}
