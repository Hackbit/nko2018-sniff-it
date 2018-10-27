import styled, { createGlobalStyle } from 'styled-components';

import bgUrl from '../../../../assets/images/bg_home.png';
import boxBgUrl from '../../../../assets/images/icn_bg-icons.png';
import searchUrl from '../../../../assets/images/icn_home.png';

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
  article {
    background: url(${boxBgUrl}) no-repeat center 115px;
    background-size: 552px;
    position: absolute;
    height: 100vh;
    width: 100%;
    opacity: 0.2;
  }
  section {
    background: url(${searchUrl}) no-repeat center 90px;
    background-size: 116px;
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: 2;
    input {
      height: 36px;
      width: 340px;
      border: 0 none;
      border-radius: 31px;
      margin-top: 239px;
      padding: 5px 120px 5px 20px;
      color: #211436;
      font-size: 18px;
      line-height: 28px;
    }
    button {
      height: 36px;
      width: 82px;
      border: 0 none;
      border-radius: 24px;
      background: linear-gradient(268.29deg,#1A6DFF 0%,#C822FF 100%);
      box-shadow: 2px 11px 17px 0 rgba(190,38,255,0.5);
      color: #FFFFFF;
      font-size: 13px;
      line-height: 22px;
      position: absolute;
      margin: 244px 0px 0 191px;
    }
  }
`;
