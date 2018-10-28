import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import { getHistory } from '../../common/utilities';

const GET_RESULT = 'app/search/GET_RESULT';
const UPDATE_RESULT = 'app/search/UPDATE_RESULT';
const SET_LOADING = 'app/search/SET_LOADING';
const SET_HISTORY = 'app/search/SET_HISTORY';
const SET_OFFSET = 'app/search/SET_OFFSET';

export const constants = {
  GET_RESULT,
  UPDATE_RESULT,
};

export const getResultAction = createAction(GET_RESULT, (searchKey, offset = 0) => ({ searchKey, offset }));
export const updateResultAction = createAction(UPDATE_RESULT, (result, offset = 0) => ({ result, offset }));
export const setLoadingAction = createAction(SET_LOADING, (isLoading) => ({ isLoading }));
export const setHistoryAction = createAction(SET_HISTORY, (history) => ({ history }));
export const setOffsetAction = createAction(SET_OFFSET, (offset) => ({ offset }));

export const actions = {
  getResultAction,
  updateResultAction,
};

export const reducers = {
  [UPDATE_RESULT]: (state, { payload }) => {
    if (payload.offset > 0) {
      const result = state.get('result');
      return state.set('result', result.concat(fromJS(payload.result)));
    }
    return state.set('result', fromJS(payload.result));
  },
  [SET_LOADING]: (state, { payload }) =>
    state.set('isLoading', fromJS(payload.isLoading)),
  [SET_HISTORY]: (state, { payload }) =>
    state.set('history', fromJS(payload.history)),
  [SET_OFFSET]: (state, { payload }) =>
    state.set('offset', fromJS(payload.offset)),
}

const initialState = () =>
  fromJS({
    searchKey: '',
    result: [],
    history: getHistory(),
    isLoading: false,
    offset: 0,
  })

export default handleActions(reducers, initialState());
