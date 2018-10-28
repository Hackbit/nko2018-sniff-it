import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const GET_RESULT = 'app/search/GET_RESULT';
const UPDATE_RESULT = 'app/search/UPDATE_RESULT';
const SET_LOADING = 'app/search/SET_LOADING';

export const constants = {
  GET_RESULT,
  UPDATE_RESULT,
};

export const getResultAction = createAction(GET_RESULT, (searchKey) => ({ searchKey }));
export const updateResultAction = createAction(UPDATE_RESULT, (result) => ({ result }));
export const setLoadingAction = createAction(SET_LOADING, (isLoading) => ({ isLoading }));

export const actions = {
  getResultAction,
  updateResultAction,
};

export const reducers = {
  [UPDATE_RESULT]: (state, { payload }) =>
    state.set('result', fromJS(payload.result)),
  [SET_LOADING]: (state, { payload }) =>
    state.set('isLoading', fromJS(payload.isLoading)),
}

const initialState = () =>
  fromJS({
    isLoading: false,
    searchKey: '',
    result: [],
  })

export default handleActions(reducers, initialState());
