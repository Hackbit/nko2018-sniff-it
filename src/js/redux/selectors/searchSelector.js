import { createSelector } from 'reselect';
import _ from 'lodash';

const searchDataSelector = (state) => state.search;

const resultSelector = createSelector(
  searchDataSelector,
  (payload) => payload.get('result').toJSON()
);

export const filteredResultSelector = createSelector(
  resultSelector,
  (result) => {
    return _.filter(result, (item) => {
      return _.compact(_.get(item, 'code')).length > 0;
    });
  }
);
