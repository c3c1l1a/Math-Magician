import operate from './operate';

export default function updateState(key, state, setState) {
  const {
    operand1, operand2, operation, result,
  } = state;

  const groupKey = () => {
    let group = '';
    if (['+', '-', '%', 'x', '÷'].includes(key)) group = 'operation';
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(key)) group = 'number';
    if (key === '=') group = '=';
    if (key === 'AC') group = 'AC';
    return group;
  };

  const doOperation = () => {
    const result = operate(operand1, operand2, operation);
    setState({
      operand1: result,
      operand2: null,
      operation: null,
      result,
    });
  };

  const sliceDisplayNum = (num) => {
    let newNum = `${num}`.slice(0, -1);
    newNum = newNum.length > 0 ? newNum : 0;
    newNum = parseInt(newNum, 10);
    return newNum;
  };

  switch (groupKey()) {
    case 'operation':
      if ((operation !== null && operand2 === null) || operation === null) {
        setState({ ...state, operation: key });
      }
      break;
    case 'number':
      if (operation === null) {
        if (operand1 === null || result === operand1) setState({ ...state, operand1: key });
        else setState({ ...state, operand1: parseInt(`${operand1}${key}`, 10) });
      } else if (operand2 === null) setState({ ...state, operand2: key });
      else setState({ ...state, operand2: parseInt(`${operand2}${key}`, 10) });
      break;
    case '=':
      if (operand1 && operand2 && operation) doOperation();
      break;
    case 'AC':
      if (operation === null && operand1 !== null) {
        const newOperand1 = sliceDisplayNum(operand1);
        setState({ ...state, operand1: newOperand1 });
      } else if (operation !== null && operand2 !== null) {
        let newOperand2 = `${operand2}`.slice(0, -1);
        newOperand2 = sliceDisplayNum(operand2);
        newOperand2 = newOperand2 !== 0 ? newOperand2 : null;
        setState({ ...state, operand2: newOperand2 });
      }
      break;
    default:
      break;
  }
}
