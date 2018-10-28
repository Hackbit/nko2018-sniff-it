import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import querystring from 'querystring';

import { saveHistory } from '../../helpers';
import { SearchBoxStyled } from './styles';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);

    this.searchBox = React.createRef();
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    const { searchKey, redirect } = this.props;
    let query = this.searchBox.current.value;

    if (query && query !== searchKey) {
      query = querystring.stringify({ q: query });
      redirect(`/search?${query}`);
      saveHistory(searchKey);
    }
  }

  render() {
    return (
      <SearchBoxStyled>
        <input
          type="text"
          ref={this.searchBox}
          placeholder="What problem are you trying to solve today?"
          defaultValue={this.props.searchKey}
          onKeyPress={this.onKeyPress}
        />
        <button
          type="button"
          onClick={this.onSubmit}
        />
      </SearchBoxStyled>
    );
  }
}

SearchBox.propTypes = {
  searchKey: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
}

export default SearchBox;
