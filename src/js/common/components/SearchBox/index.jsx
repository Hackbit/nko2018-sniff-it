/* eslint-disable */
import React, { PureComponent, Fragment } from 'react';

import { GlobalStyle, SearchBoxStyled } from './styles';

class SearchBox extends PureComponent {
  render() {
    return (
      <Fragment>
        <SearchBoxStyled>
          <article>&nbsp;</article>
          <section>
            <input type="text" />
            <button type="button">Search</button>
          </section>
        </SearchBoxStyled>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default SearchBox;
