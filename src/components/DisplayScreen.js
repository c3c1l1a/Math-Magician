/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class DisplayScreen extends React.Component {
  render() {
    const { displayScreen } = this.props;

    return (
      <p className={displayScreen}>
        0
      </p>
    );
  }
}

DisplayScreen.defaultProps = {
  displayScreen: 'displayScreen',
};


export default DisplayScreen;
