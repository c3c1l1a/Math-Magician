/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from 'react';
import NumberButton from './NumberButton';
import DisabledButton from './DisabledButton';
import DisplayScreen from './DisplayScreen';
import OperationButton from './OperationButton';
import operate from './operate';
import './css/calculator.css';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    // Create a state for two numbers that are to be operated on
    // Create a state for the operation result by calling the bound operation function 
    this.liftKey = this.liftKey.bind(this);
  }

  doOperation(operation){
    let result = operate(3, 2, operation);
    console.log(result);
  }
  
  liftKey(key){
    const operations = ['+', '-', '%', 'x', '÷'];
    if (operations.includes(key))
      this.doOperation(key);
  }
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
      
      KeyButton = <OperationButton key={name} keyValue={[name, sign]} liftKey={this.liftKey}/>;
      return KeyButton;
    });

    return (
      <div className="key-buttons-container">
        <DisplayScreen key="displayScreen" name="displayScreen" />
        {KeyButtons}
      </div>
    );
  }
}

export default Calculator;
