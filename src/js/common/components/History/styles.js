import styled, { createGlobalStyle } from 'styled-components';

import bgUrl from '../../../../assets/images/bg_allpages.png';

export const GlobalStyle = createGlobalStyle`
  html { 
    background: url(${bgUrl}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

export const ResultListStyled = styled.div`
  display: flex;
  justify-content: center;

  article {
    width: 50%;
    margin: 20px 0;
    h2 {
      color: #FFFFFF;
      font-weight: lighter;
      opacity: 0.8;
    }
  }
  @media all and (max-width: 768px) {
    article {
      width: 80%;
    }
  }
  @media all and (max-width: 480px) {
    article {
      width: 95%;
    }
  }
`;
