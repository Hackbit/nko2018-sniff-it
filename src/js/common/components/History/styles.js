import styled from 'styled-components';

export const HistoryStyled = styled.div`
  min-width: 330px;
  section {
    background-color: #231D3D;
    color: #FFFFFF;
    margin: 88px 0 0 40px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 2px;
    opacity: 0.8;
    h3 {
      font-weight: lighter;
      padding: 20px 20px 15px;
      margin: 0;
      border-bottom: 1px solid #332E4B;
    }
    ul {
      list-style-type: square;
      padding-bottom: 40px;
    }
    li {
      margin-bottom: 10px;
      font-size: 15px;
    }
  }
`;
