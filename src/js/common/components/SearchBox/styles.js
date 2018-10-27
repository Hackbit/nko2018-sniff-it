import styled, { createGlobalStyle } from 'styled-components';

import bgUrl from '../../../../assets/images/bg_home.png';
import boxBgUrl from '../../../../assets/images/icn_bg-icons.png';

export const GlobalStyle = createGlobalStyle`
  html { 
    background: url(${bgUrl}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

export const SearchBoxStyled = styled.div`
  background: url(${boxBgUrl}) no-repeat center 115px;
  background-size: 552px;
  display: flex;
  justify-content: center;
  opacity: 0.3;

  article {
    height: 900px;
    width: 1665px;
  }
`;
