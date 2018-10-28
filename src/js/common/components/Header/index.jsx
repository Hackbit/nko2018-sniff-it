import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../HeaderSearchBox';
import { HeaderStyled } from './styles';
import { parseQueryName } from '../../utilities';

class Header extends PureComponent {
  render() {
    const { history, location } = this.props;
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
            redirect={history.push}
          />
        }
      </HeaderStyled>
    );
  }
}

export default Header;
