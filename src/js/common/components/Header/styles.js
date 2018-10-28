import styled from 'styled-components';

import homeLogoUrl from '../../../../assets/images/logo_nobg.png';
import logoUrl from '../../../../assets/images/logo_bg.png';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid #7B7289;
  display: flex;
  a {
    display: block;
    background: url(${logoUrl}) no-repeat right top;
    background-size: cover;
    width: 199px;
    height: 66px;
  }
  a.vote {
    background: none;
    color: #fff;
    text-decoration: none;
    position: absolute;
    right: 0;
    font-size: 16px;
    padding-top: 25px;
    
  }
  a.vote:hover {
    text-decoration:underline;
  }
  a.home {
    background: url(${homeLogoUrl}) no-repeat right top;
    background-size: cover;
    width: 78px;
    height: 31px;
    margin: 18px 52px;
  }
`;
