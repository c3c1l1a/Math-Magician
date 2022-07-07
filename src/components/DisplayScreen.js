/* eslint-disable react/prefer-stateless-function */
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
  info: {},
};

DisplayScreen.propTypes = {
  displayScreen: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.number.isRequired, PropTypes.string.isRequired],
  )),
};

export default DisplayScreen;
