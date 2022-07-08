/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */

import React from 'react';
import DisplayScreen from './DisplayScreen';
import KeyButton from './KeyButton';
import operate from './operate';
import './css/calculator.css';

function Calculator () {
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
    const [name, sign] = Object.entries(keyValue)[0];
    return <KeyButton key={name} keyValue={[name, sign]} />;
  });

  return (
    <div className="key-buttons-container">
      <DisplayScreen key="displayScreen" name="displayScreen" />
      {KeyButtons}
    </div>
  );
}



export default Calculator;
