import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import { parseQueryName } from '../../common/utilities';
import Spinner from '../../common/components/Spinner'
import { getResultAction } from '../../redux/modules/search';

require('../../../style/index.css');

const LoadableComponent = Loadable({
  loader: () => import('../../common/components/ResultList'),
  loading: Spinner,
})

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResult: getResultAction,
  }, dispatch);
}

class SearchView extends Component {
  componentDidMount() {
    const { getResult, location } = this.props;
    const searchKey = parseQueryName(_.get(location, 'search'), 'q');

    getResult(searchKey);
  }

  render() {
    return (
      <Fragment>
        <LoadableComponent />
      </Fragment>
    )
  }
}

SearchView.propTypes = {
  getResult: PropTypes.func.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SearchView);
