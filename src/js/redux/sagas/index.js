import { all } from 'redux-saga/effects'
import { searchSaga } from './searchSaga';

export default function* sagas() {
  yield all([
    ...searchSaga,
  ]);
}
