/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

const DisplayScreen = (props) => {
  const { name, info } = props;

  return (
    <p className={name}>
      <span>{info.operand1}</span>
      <span>{info.operation}</span>
      <span>{info.operand2}</span>
    </p>
  );
};

DisplayScreen.defaultProps = {
  name: 'displayScreen',
  info: {},
};

DisplayScreen.propTypes = {
  name: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.number.isRequired, PropTypes.string.isRequired],
  )),
};

export default DisplayScreen;
