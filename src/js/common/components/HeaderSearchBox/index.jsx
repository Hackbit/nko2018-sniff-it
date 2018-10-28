import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

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
    const { searchKey, onSearch } = this.props;
    const value = _.get(this.searchBox, 'current.value');

    if (value && value !== searchKey) {
      onSearch(value);
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
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox;
