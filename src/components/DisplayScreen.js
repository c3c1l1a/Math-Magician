/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';


function DisplayScreen (props) {
  const { name, info } = props;

  return (
    <p className={name}>
      <span>{info.operand1}</span>
      <span>{info.operation}</span>
      <span>{info.operand2}</span>
    </p>
  );
}

export default DisplayScreen;
