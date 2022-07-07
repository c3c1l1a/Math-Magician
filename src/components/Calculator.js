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
  
    this.state = {
      operand1: null,
      operand2: null,
      operation: null,
      result: null
    }
  
    this.liftKey = this.liftKey.bind(this);
  }

  doOperation(){
    let result = operate(this.state.operand1, this.state.operand2, this.state.operation);
    this.setState({operand1: result});
    this.setState({operand2: null});
    this.setState({operation: null});
    this.setState({result: result});
  }
  
  liftKey(key){
    const operations = ['+', '-', '%', 'x', '÷'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const equals = '=';
    if (operations.includes(key)){
      this.setState({operation: key});
    } else if(numbers.includes(key)){
      if (this.state.operation === null){
        if (this.state.operand1 === null || this.state.result === this.state.operand1)
          this.setState({operand1: key})
        else 
            this.setState({operand1: parseInt(''+this.state.operand1+key)});
      } else {
        if (this.state.operand2 === null)
          this.setState({operand2: key})
        else 
          this.setState({operand2: parseInt(''+this.state.operand2+key)});
      } 
        
    } else if (key === '=') {
      const hasOperand1 = this.state.operand1 !== null ? true : false;
      const hasOperand2 = this.state.operand2 !== null ? true : false;
      const hasOperation = this.state.operation !== null ? true : false;
      if (hasOperand1 && hasOperand2 && hasOperation){
        this.doOperation();
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
      let KeyButton = null;
      const [name, sign] = Object.entries(keyValue)[0];
      
      KeyButton = <OperationButton key={name} keyValue={[name, sign]} liftKey={this.liftKey}/>;
      return KeyButton;
    });

    return (
      <div className="key-buttons-container">
        <DisplayScreen key="displayScreen" name="displayScreen" info={this.state}/>
        {KeyButtons}
      </div>
    );
  }
}

export default Calculator;
