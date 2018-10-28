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
            <p>What problem are you trying to solve today?</p>
          </section>
        </SearchBoxStyled>
        <GlobalStyle />
        
      </Fragment>
    );
  }
}

export default SearchBox;
