/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';



function KeyButton(props) {
  const { keyValue, liftKey } = props;
  const [name, sign] = keyValue;

  const onClickHandler = () => {
    const key = keyValue[1];
    liftKey(key);
  }

  return (
    <button className={name} type="submit"  onClick={onClickHandler}>
      {sign}
    </button>
  );
}



export default KeyButton;
