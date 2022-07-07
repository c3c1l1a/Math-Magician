/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import DisplayScreen from './DisplayScreen';
import KeyButton from './KeyButton';
import operate from './operate';
import './css/calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operand1: 0,
      operand2: null,
      operation: null,
      result: null,
    };

    this.liftKey = this.liftKey.bind(this);
  }

  doOperation() {
    const { operand1, operand2, operation } = this.state;

    const result = operate(operand1, operand2, operation);
    this.setState({ operand1: result });
    this.setState({ operand2: null });
    this.setState({ operation: null });
    this.setState({ result });
  }

  liftKey(key) {
    const operations = ['+', '-', '%', 'x', '÷'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const {
      operand1, operand2, operation, result,
    } = this.state;

    if (operations.includes(key)) {
      if ((operation !== null && operand2 === null) || operation === null) {
        this.setState({ operation: key });
      }
    } else if (numbers.includes(key)) {
      if (operation === null) {
        if (operand1 === null || result === operand1) this.setState({ operand1: key });
        else this.setState({ operand1: parseInt(`${operand1}${key}`, 10) });
      } else if (operand2 === null) this.setState({ operand2: key });
      else this.setState({ operand2: parseInt(`${operand2}${key}`, 10) });
    } else if (key === '=') {
      const hasOperand1 = operand1 !== null;
      const hasOperand2 = operand2 !== null;
      const hasOperation = operation !== null;
      if (hasOperand1 && hasOperand2 && hasOperation) this.doOperation();
    } else if (key === 'AC') {
      if (operation === null && operand1 !== null) {
        let newOperand1 = `${operand1}`.slice(0, -1);
        newOperand1 = newOperand1.length > 0 ? newOperand1 : 0;
        newOperand1 = parseInt(newOperand1, 10);
        this.setState({ operand1: newOperand1 });
      } else if (operation !== null && operand2 !== null) {
        let newOperand2 = `${operand2}`.slice(0, -1);
        newOperand2 = newOperand2.length > 0 ? newOperand2 : 0;
        newOperand2 = parseInt(newOperand2, 10);
        newOperand2 = newOperand2 !== 0 ? newOperand2 : null;
        this.setState({ operand2: newOperand2 });
      }
    }
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
      const [name, sign] = Object.entries(keyValue)[0];
      return <KeyButton key={name} keyValue={[name, sign]} liftKey={this.liftKey} />;
    });

    return (
      <div className="key-buttons-container">
        <DisplayScreen key="displayScreen" name="displayScreen" info={this.state} />
        {KeyButtons}
      </div>
    );
  }
}

export default Calculator;
