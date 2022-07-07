/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class DisplayScreen extends React.Component {
  render() {
    const { displayScreen, info } = this.props;

    return (
      <p className={displayScreen}>
        <span>{info.operand1}</span>
        <span>{info.operation}</span>
        <span>{info.operand2}</span>

      </p>
    );
  }
}

DisplayScreen.defaultProps = {
  displayScreen: 'displayScreen',
};

DisplayScreen.propTypes = {
  displayScreen: PropTypes.string,
};

export default DisplayScreen;
