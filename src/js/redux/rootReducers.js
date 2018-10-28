import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import search from './modules/search';

export default combineReducers({
  search,
  routing,
});
