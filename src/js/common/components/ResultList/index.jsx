import React, { PureComponent, Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { tomorrowNightEighties } from 'react-syntax-highlighter/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withRouter } from 'react-router-dom';

import History from '../History';
import { filteredResultSelector, loadingSelector, offsetSelector } from '../../../redux/selectors/searchSelector';
import { ResultListStyled, SyntaxStyled, SnippetStyled, BarStyled, ShowMoreStyled } from './styles';
import { getResultAction } from '../../../redux/modules/search';
import { parseQueryName } from '../../utilities';

const Bar = ({ points, code }) => {
  return (
    <BarStyled>
      <section>
        <CopyToClipboard text={code}>
          <div className="copy">
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
    let codes = _.get(answer, 'code', []);
    const points = _.get(answer, 'points') || '0';

    return (
      <li key={index}>
        <Codes codes={[codes.join('\n')]} points={points} />
      </li>
    );
  });
  return (
    <ul>{items}</ul>
  );
};

class ResultList extends PureComponent {
  onShowMore = (event) => {
    event.preventDefault();
    const { getResult, location, offset } = this.props;
    const { search } = location;
    const searchKey = parseQueryName(search, 'q') || '';

    getResult(searchKey, offset + 1);
  }

  render() {
    const { result, isLoading, offset } = this.props;
    const showMoreLabel = isLoading && offset > 0 ? 'Sniffing' : 'Show More';
    return (
      <Fragment>
        <ResultListStyled>
          <article>
            {offset === 0 && isLoading ? (
              <h2>Sniffing ...</h2>
            ) : (
              <Fragment>
                {result.length > 0 ? (
                  <Fragment>
                    <h2>Search results</h2>
                    <Answers data={this.props.result} />
                    <ShowMoreStyled
                      href="/"
                      onClick={this.onShowMore}
                    >
                      {showMoreLabel}
                    </ShowMoreStyled>
                  </Fragment>
                ) : (
                  <h2>No results</h2>
                )}
              </Fragment>
            )}
          </article>
          <History />
        </ResultListStyled>
      </Fragment>
    );
  }
}

ResultList.propTypes = {
  result: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getResult: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  result: filteredResultSelector,
  isLoading: loadingSelector,
  offset: offsetSelector,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResult: getResultAction,
  }, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(withRouter(ResultList));

