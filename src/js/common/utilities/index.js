import _ from 'lodash';
import querystring from 'querystring';

const parseQuery = (queries) => {
  return querystring.parse(queries.substring(1));
};

const parseQueryName = (queries, name) => {
  return _.get(parseQuery(queries), name) || '';
};

const setHistory = (value) => {
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  localStorage.setItem('history', JSON.stringify(_.uniq(_.concat([], value, history))));
}

const getHistory = () => {
  return JSON.parse(localStorage.getItem('history') || '[]');
}

export {
  parseQuery,
  parseQueryName,
  setHistory,
  getHistory,
};
