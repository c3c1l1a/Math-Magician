/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class KeyButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const { keyValue, liftKey } = this.props;
    const key = keyValue[1];
    liftKey(key);
  }

  render() {
    const { keyValue } = this.props;
    const [name, sign] = [...keyValue];

    return (
      <button className={name} type="submit" onClick={this.onClickHandler}>
        {sign}
      </button>
    );
  }
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
