/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class DisabledButton extends React.Component {
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

DisabledButton.propTypes = { keyValue: PropTypes.string.isRequired };

export default DisabledButton;
