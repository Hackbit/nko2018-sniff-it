/* eslint-disable */
import React, { PureComponent, Fragment } from 'react';

import { GlobalStyle, SearchBoxStyled } from './styles';

class SearchBox extends PureComponent {
  render() {
    return (
      <Fragment>
        <SearchBoxStyled>
          <article>
            &nbsp;
          </article>
        </SearchBoxStyled>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default SearchBox;
