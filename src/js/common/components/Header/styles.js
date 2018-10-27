import styled from 'styled-components';

import logoUrl from '../../../../assets/images/logo_nobg.png';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid #7B7289;
  padding: 15px 60px;

  aside {
    background: url(${logoUrl}) no-repeat right top;
    background-size: cover;
    width: 72px;
    height: 30px;
  }
`;
