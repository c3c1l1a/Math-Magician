import React, { useState } from 'react';
import updateState from '../updateState';
import DisplayScreen from '../DisplayScreen';
import KeyButton from '../KeyButton';

const Calculator = () => {
  const [state, setState] = useState({
    operand1: 0,
    operand2: null,
    operation: null,
    result: null,
  });

  const liftKey = (key) => {
    updateState(key, state, setState);
  };

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
    return <KeyButton key={name} keyValue={[name, sign]} liftKey={liftKey} />;
  });
  return (
    <div className="calculator-page">
      <h1 className="calculator-header">{'Let\'s do some maths'}</h1>
      <div className="key-buttons-container">
        <DisplayScreen key="displayScreen" name="displayScreen" info={state} />
        {KeyButtons}
      </div>
    </div>
  );
};

export default Calculator;
