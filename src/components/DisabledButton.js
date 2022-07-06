/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class DisabledButton extends React.Component {
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

DisabledButton.defaultProps = {
  keyValue: ['sign', '+'],
};

DisabledButton.propTypes = {
  keyValue: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string.isRequired, PropTypes.string.isRequired],
  )),
};

export default DisabledButton;
