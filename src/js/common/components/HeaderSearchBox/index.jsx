import React, { PureComponent } from 'react';

import { SearchBoxStyled } from './styles';

class SearchBox extends PureComponent {
  render() {
    return (
      <SearchBoxStyled>
        <input type="text" placeholder="What problem are you trying to solve today?" />
        <button type="button" />
      </SearchBoxStyled>
    );
  }
}

export default SearchBox;
