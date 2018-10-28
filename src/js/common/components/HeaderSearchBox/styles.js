import styled from 'styled-components';

import searchIconUrl from '../../../../assets/images/icn-search.png';

export const SearchBoxStyled = styled.div`
  input {
    margin-top: 12px;
    height: 40px;
    width: 480px;
    border: 0 none;
    border-radius: 31px;
    padding: 5px 98px 5px 20px;
    color: #827B8E;
    font-size: 15px;
    line-height: 28px;
  }
  button {
    height: 22px;
    width: 22px;
    border: 0 none;
    background: url(${searchIconUrl}) no-repeat 0 0;
    background-size: cover;
    position: absolute;
    margin: 20px 0 0 -40px;
    padding: 0;
  }
`;
