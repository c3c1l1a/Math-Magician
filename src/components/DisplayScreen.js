/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';


function DisplayScreen (props) {
  const { name } = props;

  return (
    <p className={name}>
       <span>0</span>
    </p>
  );
}

export default DisplayScreen;
