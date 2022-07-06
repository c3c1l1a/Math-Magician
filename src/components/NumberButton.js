/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  render() {
    const { keyValue } = this.props;
    const [name, sign] = [...keyValue];

    return (
      <button className={name} type="submit">
        {sign}
      </button>
    );
  }
}

NumberButton.defaultProps = {
  keyValue: ['sign', 0],
};

NumberButton.propTypes = {
  keyValue: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string.isRequired, PropTypes.number.isRequired],
  )),
};

export default NumberButton;
