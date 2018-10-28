import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { GlobalStyle, SearchBoxStyled } from './styles';
import { saveHistory } from '../../helpers';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);

    this.searchText = React.createRef();
    this.redirect = this.redirect.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.redirect();
    }
  }

  redirect() {
    const query = this.searchText.current.value;
    if (query) {
      this.props.history.push({
        pathname: '/search',
        search: `?q=${encodeURIComponent(query.trim())}`,
      });
      saveHistory(query);
    }
  }

  componentDidMount() {
    this.searchText.current.focus();
  }

  render() {
    return (
      <Fragment>
        <SearchBoxStyled>
          <article>&nbsp;</article>
          <section>
            <input type="text" ref={this.searchText} onKeyPress={this.onKeyPress}/>
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
