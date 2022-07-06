/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import NumberButton from './NumberButton';
import DisabledButton from './DisabledButton';
import DisplayScreen from './DisplayScreen';
import './css/calculator.css';

class Calculator extends React.Component {
  render() {
    const keyValues = [
      { clear: 'AC' },
      { changeSign: '+/-' },
      { percentage: '%' },
      { divide: '÷' },
      { seven: 7 },
      { eight: 8 },
      { nine: 9 },
      { times: 'x' },
      { four: 4 },
      { five: 5 },
      { six: 6 },
      { minus: '-' },
      { one: 1 },
      { two: 2 },
      { three: 3 },
      { plus: '+' },
      { zero: 0 },
      { point: '.' },
      { equals: '=' },
    ];

    const KeyButtons = keyValues.map((keyValue) => {
      let KeyButton = null;
      const [name, sign] = Object.entries(keyValue)[0];
      switch (keyValue) {
        case 'AC':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '+/-':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '%':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '÷':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case 'x':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '-':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '+':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '.':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        case '=':
          KeyButton = <DisabledButton key={name} keyValue={[name, sign]} />;
          break;
        default:
          KeyButton = <NumberButton key={name} keyValue={[name, sign]} />;
      }
      return KeyButton;
    });

    return (
      <div className="key-buttons-container">
        <DisplayScreen key="displayScreen" name="displayScreen"/>
        {KeyButtons}
      </div>
    );
  }
}

export default Calculator;
