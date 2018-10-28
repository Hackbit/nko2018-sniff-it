import axios from 'axios';
import _ from 'lodash';
import querystring from 'querystring';
import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { constants, updateResultAction, setLoadingAction, setHistoryAction, setOffsetAction } from '../modules/search';
import { setHistory, getHistory } from '../../common/utilities';

const { GET_RESULT } = constants;

const searchApi = (q, offset) => {
  return axios.get(`${__CONFIG__.apiUrl}?${querystring.stringify({ q, offset })}`);
}

export function* getResult({ payload }) {
  try {
    setHistory(payload.searchKey);
    yield put(setHistoryAction(getHistory()));
    yield put(setOffsetAction(payload.offset));
    yield put(setLoadingAction(true));
    const resp = yield call(searchApi, payload.searchKey, payload.offset);

    yield put(updateResultAction(_.get(resp, 'data.data', []), payload.offset));
  } catch (e) {
    yield put(updateResultAction([]));
  } finally {
    yield put(setLoadingAction(false));
  }
}

function* watchGetResult() {
  yield takeLatest(GET_RESULT, getResult);
}

export const searchSaga = [
  fork(watchGetResult),
];
