import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import { getHistory } from '../../common/utilities';

const GET_RESULT = 'app/search/GET_RESULT';
const UPDATE_RESULT = 'app/search/UPDATE_RESULT';
const SET_LOADING = 'app/search/SET_LOADING';
const SET_HISTORY = 'app/search/SET_HISTORY';

export const constants = {
  GET_RESULT,
  UPDATE_RESULT,
};

export const getResultAction = createAction(GET_RESULT, (searchKey) => ({ searchKey }));
export const updateResultAction = createAction(UPDATE_RESULT, (result) => ({ result }));
export const setLoadingAction = createAction(SET_LOADING, (isLoading) => ({ isLoading }));
export const setHistoryAction = createAction(SET_HISTORY, (history) => ({ history }));

export const actions = {
  getResultAction,
  updateResultAction,
};

export const reducers = {
  [UPDATE_RESULT]: (state, { payload }) =>
    state.set('result', fromJS(payload.result)),
  [SET_LOADING]: (state, { payload }) =>
    state.set('isLoading', fromJS(payload.isLoading)),
  [SET_HISTORY]: (state, { payload }) =>
    state.set('history', fromJS(payload.history)),
}

const initialState = () =>
  fromJS({
    isLoading: false,
    searchKey: '',
    history: getHistory(),
    result: [],
  })

export default handleActions(reducers, initialState());
