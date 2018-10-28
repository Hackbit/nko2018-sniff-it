import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import SearchBox from '../HeaderSearchBox';
import { HeaderStyled } from './styles';

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === '/';
    const classname = isHome ? 'home' : '';

    return (
      <HeaderStyled>
        <Link className={classname} to="/">&nbsp;</Link>
        {!isHome &&
          <SearchBox />
        }
      </HeaderStyled>
    );
  }
}

export default Header;
