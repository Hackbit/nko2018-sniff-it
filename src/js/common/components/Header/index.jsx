import React, { PureComponent } from 'react';

import { HeaderStyled } from './styles';

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;
    const classname = pathname === '/' ? 'home' : '';

    return (
      <HeaderStyled>
        <aside className={classname}>&nbsp;</aside>
      </HeaderStyled>
    );
  }
}

export default Header;
