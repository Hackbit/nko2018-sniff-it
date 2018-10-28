import React, { PureComponent } from 'react';

import { HistoryStyled } from './styles';

class History extends PureComponent {
  render() {
    return (
      <HistoryStyled>
        <section>
          <h3>Previous searches</h3>
          <ul>
            <li>First search key</li>
            <li>Second search key</li>
            <li>Third search key</li>
          </ul>
        </section>
      </HistoryStyled>
    );
  }
}

export default History;
