import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import querystring from 'querystring';

import { getResultAction } from '../../../redux/modules/search';
import { historySelector } from '../../../redux/selectors/searchSelector';
import { HistoryStyled } from './styles';

const PreviousSearch = ({ data, onSearch }) => {
  const items = _.map(data, (value, index) => {
    return (
      <li key={index}>
        <a href="/" onClick={onSearch(value)}>{value}</a>
      </li>
    );
  });
  return (
    <ul>{items}</ul>
  );
};

class History extends PureComponent {
  onSearch = (value) => {
    const { history, getResult } = this.props;

    return (event) => {
      event.preventDefault();
      const query = querystring.stringify({ q: value });

      history.push(`/search?${query}`);
      getResult(value);
    }
  }

  render() {
    return (
      <HistoryStyled>
        <section>
          <h3>Previous searches</h3>
          <PreviousSearch
            data={this.props.historyList}
            onSearch={this.onSearch}
          />
        </section>
      </HistoryStyled>
    );
  }
}

History.propTypes = {
  historyList: PropTypes.array.isRequired,
  getResult: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  historyList: historySelector,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResult: getResultAction,
  }, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(withRouter(History));
