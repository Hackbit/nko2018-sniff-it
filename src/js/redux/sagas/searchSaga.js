import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants, updateResultAction } from '../modules/search';

const { GET_RESULT } = constants;

const data = require('./data.json');

export function* getResult() {
  yield put(updateResultAction(data));
}

function* watchGetResult() {
  yield takeLatest(GET_RESULT, getResult);
}

export const searchSaga = [
  fork(watchGetResult),
];
