import React, { Fragment } from 'react';
import Loadable from 'react-loadable';

import Spinner from '../../common/components/Spinner';

require('../../../style/index.css');

const LoadableComponent = Loadable({
  loader: () => import('../../common/components/SearchBox'),
  loading: Spinner,
})

const HomeView = () => {
  return (
    <Fragment>
      <LoadableComponent />
    </Fragment>
  )
}

export default HomeView;
