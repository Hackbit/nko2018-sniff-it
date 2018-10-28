import _ from 'lodash';
import querystring from 'querystring';

const parseQuery = (queries) => {
  return querystring.parse(queries.substring(1));
};

const parseQueryName = (queries, name) => {
  return _.get(parseQuery(queries), name) || '';
};

export {
  parseQuery,
  parseQueryName,
};
