import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { HistoryStyled } from './styles';
import { getHistory } from '../../helpers';

const PreviousSearch = ({ data }) => {
  const split = data.split(';');
  const items = _.map(split, (s, idx) => {
    if (s !== '') {
      const query = encodeURIComponent(s);
      return (
        <li key={idx}>
          <Link to={{pathname: "search", search: `?q=${query}`}}>{s}</Link>
        </li>
      );
    } 
  });

  return (
    <ul>{items}</ul>
  );
};

class History extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      history: '',
    };
  }

  componentDidMount() {
    this.setState({
      history: getHistory(),
    });
  }

  render() {
    return (
      <HistoryStyled>
        <section>
          <h3>Previous searches</h3>
          <PreviousSearch data={this.state.history} />
        </section>
      </HistoryStyled>
    );
  }
}

export default History;
