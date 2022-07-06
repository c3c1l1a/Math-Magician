/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  render() {
    const { keyValue } = this.props;
    const className = `item-${keyValue}`;
    return (
      <button className={className} type="submit">
        {keyValue}
      </button>
    );
  }
}

NumberButton.propTypes = { keyValue: PropTypes.number.isRequired };

export default NumberButton;
