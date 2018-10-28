import axios from 'axios';
import _ from 'lodash';
import querystring from 'querystring';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { constants, updateResultAction, setLoadingAction } from '../modules/search';

const { GET_RESULT } = constants;

const searchApi = (q) => {
  return axios.get(`${__CONFIG__.apiUrl}?${querystring.stringify({ q })}`);
}

export function* getResult({ payload }) {
  yield put(setLoadingAction(true));
  const resp = yield call(searchApi, payload.searchKey);
  yield put(setLoadingAction(false));

  yield put(updateResultAction(_.get(resp, 'data.data', [])));
}

function* watchGetResult() {
  yield takeLatest(GET_RESULT, getResult);
}

export const searchSaga = [
  fork(watchGetResult),
];
