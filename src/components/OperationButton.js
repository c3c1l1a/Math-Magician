/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class OperationButton extends React.Component {
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(){
    const { keyValue } = this.props;
    this.props.liftKey(keyValue[1]);
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
/*
OperationButton.defaultProps = {
  keyValue: ['sign', '+'],
};

OperationButton.propTypes = {
  keyValue: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string.isRequired, PropTypes.string.isRequired],
  )),
};
*/
export default OperationButton;
