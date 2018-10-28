import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import querystring from 'querystring';

import { saveHistory } from '../../helpers';
import SearchBox from '../HeaderSearchBox';
import { HeaderStyled } from './styles';
import { parseQueryName } from '../../utilities';
import { getResultAction } from '../../../redux/modules/search';

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResult: getResultAction,
  }, dispatch);
}

class Header extends PureComponent {
  onSearch = (value) => {
    const { history, getResult } = this.props;
    const query = querystring.stringify({ q: value });

    history.push(`/search?${query}`);
    saveHistory(value);
    getResult(value);
  }

  render() {
    const { location } = this.props;
    const { pathname, search } = location;
    const isHome = pathname === '/';
    const classname = isHome ? 'home' : '';
    const searchKey = parseQueryName(search, 'q') || '';

    return (
      <HeaderStyled>
        <Link className={classname} to="/">&nbsp;</Link>
        {!isHome &&
          <SearchBox
            searchKey={searchKey}
            onSearch={this.onSearch}
          />
        }
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  getResult: PropTypes.func.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Header);
