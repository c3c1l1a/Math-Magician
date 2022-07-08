/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

function KeyButton(props) {
  const { keyValue, liftKey } = props;
  const [name, sign] = keyValue;

  const onClickHandler = () => {
    const key = keyValue[1];
    liftKey(key);
  };

  return (
    <button className={name} type="submit" onClick={onClickHandler}>
      {sign}
    </button>
  );
}

KeyButton.defaultProps = {
  keyValue: ['sign', '+'],
};

KeyButton.propTypes = {
  keyValue: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.number.isRequired, PropTypes.string.isRequired],
  )),
  liftKey: PropTypes.func.isRequired,
};

export default KeyButton;
