/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import NumberButton from './NumberButton';
import DisabledButton from './DisabledButton';
import './css/calculator.css';

class Calculator extends React.Component {
  render() {
    const keyValues = ['AC', '+/-', '%', '+', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '++', 0, '.', '='];

    const KeyButtons = keyValues.map((keyValue) => {
      let KeyButton = null;
      switch (keyValue) {
        case 'AC':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '+/-':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '%':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '+':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case 'x':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '-':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '++':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '.':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        case '=':
          KeyButton = <DisabledButton key={keyValue} keyValue={keyValue} />;
          break;
        default:
          KeyButton = <NumberButton key={keyValue} keyValue={keyValue} />;
      }
      return KeyButton;
    });

    return (
      <div className="key-buttons-container">
        {KeyButtons}
      </div>
    );
  }
}

export default Calculator;
