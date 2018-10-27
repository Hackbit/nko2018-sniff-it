import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Header from './common/components/Header';
import HomeRouteHandler from './views/home';
import SearchRouteHandler from './views/search';
import ErrorBoundary from './common/components/ErrorBoundary';

const HeaderWithRouter = withRouter(Header);

module.exports = (
  <div className="container">
    <ErrorBoundary>
      <HeaderWithRouter />
      <div>
        <Switch>
          <Route exact path="/" component={HomeRouteHandler} />
          <Route path="/search" component={SearchRouteHandler} />
          <Route path="*" component={HomeRouteHandler} />
        </Switch>
      </div>
    </ErrorBoundary>
  </div>
);
