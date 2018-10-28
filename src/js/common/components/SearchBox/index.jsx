import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import querystring from 'querystring';

import { GlobalStyle, SearchBoxStyled } from './styles';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);

    this.searchText = React.createRef();
  }

  componentDidMount() {
    this.searchText.current.focus();
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.redirect();
    }
  }

  redirect = () => {
    const { history } = this.props;
    const searchKey = this.searchText.current.value;

    if (searchKey) {
      const query = querystring.stringify({ q: searchKey });
      const path = `/search?${query}`;

      history.push(path);
    }
  }

  render() {
    return (
      <Fragment>
        <SearchBoxStyled>
          <article>&nbsp;</article>
          <section>
            <input type="text" ref={this.searchText} onKeyPress={this.onKeyPress} placeholder="String concatenation" />
            <button type="button" onClick={this.redirect}>Search</button>
            <p>What problem are you trying to solve today?</p>
          </section>
        </SearchBoxStyled>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(SearchBox);
