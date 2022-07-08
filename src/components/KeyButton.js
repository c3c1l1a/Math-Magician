/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';



function KeyButton(props) {
  const { keyValue } = props;
  const [name, sign] = keyValue;

  return (
    <button className={name} type="submit" >
      {sign}
    </button>
  );
}


export default KeyButton;
