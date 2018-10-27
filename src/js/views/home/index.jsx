import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import Spinner from '../../common/components/Spinner'

require('../../../style/index.css');

const LoadableComponent = Loadable({
  loader: () => import('../../common/components/SearchBox'),
  loading: Spinner,
})

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

class HomeView extends Component {
  render() {
    return (
      <Fragment>
        <LoadableComponent />
      </Fragment>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeView);
