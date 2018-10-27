import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Header from './common/components/Header';
import HomeRouteHandler from './views/home';
import ErrorBoundary from './common/components/Utilities/ErrorBoundary';

const HeaderWithRouter = withRouter(Header);

module.exports = (
  <div className="container">
    <ErrorBoundary>
      <HeaderWithRouter />
      <div>
        <Switch>
          <Route exact path="/" component={HomeRouteHandler} />
          <Route path="*" component={HomeRouteHandler} />
        </Switch>
      </div>
    </ErrorBoundary>
  </div>
);
