import React, { PureComponent, Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import History from '../History';
import { filteredResultSelector } from '../../../redux/selectors/searchSelector';
import { ResultListStyled, SyntaxStyled, SnippetStyled, BarStyled } from './styles';

const Bar = ({ points, code }) => {
  return (
    <BarStyled>
      <section>
        <CopyToClipboard text={code}>
          <div className='copy'>
            <i className="far fa-copy" />
            <small>Copy</small>
          </div>
        </CopyToClipboard>
        
      </section>
      <section>
        <i className="far fa-heart" />
        <small>{points}</small>
      </section>
    </BarStyled>
  );
};

const Codes = ({ codes, points }) => {
  const items = _.map(codes, (code, index) => (
    <SnippetStyled key={index}>
      <SyntaxStyled
        style={tomorrowNightEighties}
        showLineNumbers
      >
        {code}
      </SyntaxStyled>
      <Bar points={points} code={code} />
    </SnippetStyled>
  ));
  return (
    <Fragment>{items}</Fragment>
  );
};

const Answers = ({ data }) => {
  const items = _.map(data, (answer, index) => {
    const codes = _.get(answer, 'code', []);
    return (
      <li key={index}>
        <Codes codes={codes} points={123} />
      </li>
    );
  });
  return (
    <ul>{items}</ul>
  );
};

class ResultList extends PureComponent {
  render() {
    return (
      <Fragment>
        <ResultListStyled>
          <article>
            <h2>25 results</h2>
            <Answers data={this.props.result} />
          </article>
          <History />
        </ResultListStyled>
      </Fragment>
    );
  }
}

ResultList.propTypes = {
  result: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  result: filteredResultSelector,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ResultList);

