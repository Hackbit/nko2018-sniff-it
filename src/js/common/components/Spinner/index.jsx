import React, { PureComponent } from 'react';

import { SpinnerStyled } from './styles';

class Spinner extends PureComponent {
  getMessage() {
    const {
      isLoading,
      timedOut,
      pastDelay,
      error,
    } = this.props;
    const errorMessage = 'We can&apos;t pull up information at this point, please try again.'

    if (isLoading) {
      if (timedOut) {
        return <div>{errorMessage}</div>;
      } else if (pastDelay) {
        return <div className="loader">Loading...</div>;
      }
      return null;
    } else if (error) {
      return <div>{errorMessage}</div>;
    }
    return null;
  }

  render() {
    return (
      <SpinnerStyled>
        {this.getMessage()}
      </SpinnerStyled>
    );
  }
}

export default Spinner;
