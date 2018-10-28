import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const GET_RESULT = 'app/search/GET_RESULT';
const UPDATE_RESULT = 'app/search/UPDATE_RESULT';

export const constants = {
  GET_RESULT,
  UPDATE_RESULT,
};

export const getResultAction = createAction(GET_RESULT, (searchKey) => ({ searchKey }));
export const updateResultAction = createAction(UPDATE_RESULT, (result) => ({ result }));

export const actions = {
  getResultAction,
  updateResultAction,
};

export const reducers = {
  [UPDATE_RESULT]: (state, { payload }) =>
    state.set('result', fromJS(payload.result)),
}

const initialState = () =>
  fromJS({
    searchKey: '',
    result: [],
  })

export default handleActions(reducers, initialState());
