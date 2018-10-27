import React, { PureComponent, Fragment } from 'react';
import Syntax from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/styles/hljs';

import { GlobalStyle, ResultListStyled } from './styles';

class ResultList extends PureComponent {
  render() {
    return (
      <Fragment>
        <ResultListStyled>
          <article>
            <h2>25 results</h2>
            <section>
              <Syntax
                language='javascript'
                style={androidstudio}
                showLineNumbers={true}>
                  javascript
              </Syntax>
            </section>
          </article>
          <aside>
            Hello There
          </aside>
        </ResultListStyled>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default ResultList;
