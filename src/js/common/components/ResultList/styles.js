import styled from 'styled-components';
import Syntax from 'react-syntax-highlighter';

export const ResultListStyled = styled.div`
  display: flex;
  justify-content: center;
  article {
    margin: 20px 0 0 0;
    h2 {
      color: #FFFFFF;
      opacity: 0.8;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export const SnippetStyled = styled.div`
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 2px;
  display: flex;
  margin-bottom: 20px;
  min-height: 180px;
`;

export const BarStyled = styled.div`
  background-color: #342F4A;
  color: #FFFF;
  text-align: center;
  padding: 15px 10px;
  opacity: 0.7;
  section {
    margin-bottom: 20px;
    i {
      display: block;
      font-size: 18px;
    }
    small {
      font-size: 10px;
      font-weight: bold;
    }
  }
`;

export const SyntaxStyled = styled(Syntax)`
  font-size: 16px;
  background-color: #231D3D !important;
  padding: 14px !important;
  margin: 0;
  overflow-x: scroll;
  width: 640px;
`;
