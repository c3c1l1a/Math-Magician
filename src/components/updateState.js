/* eslint-disable */
import operate from './operate';

export default function updateState(key, state, setState){
	const operations = ['+', '-', '%', 'x', '÷'];
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const { operand1, operand2, operation, result } = state;

	const doOperation = () => {
		const result = operate(operand1, operand2, operation);
		setState({ 
			operand1: result,
			operand2: null,
			operation: null,
			result: result
		});
	}

	if (operations.includes(key)) {
	  if ((operation !== null && operand2 === null) || operation === null) {
	    setState({ ...state, operation: key });
	  }
	} else if (numbers.includes(key)) {
	  if (operation === null) {
	    if (operand1 === null || result === operand1) setState({ ...state, operand1: key });
	    else setState({ ...state, operand1: parseInt(`${operand1}${key}`, 10) });
	  } else if (operand2 === null) setState({ ...state, operand2: key });
	  else setState({ ...state, operand2: parseInt(`${operand2}${key}`, 10) });
	} else if (key === '=') {
	  const hasOperand1 = operand1 !== null;
	  const hasOperand2 = operand2 !== null;
	  const hasOperation = operation !== null;
	  if (hasOperand1 && hasOperand2 && hasOperation) doOperation();
	} else if (key === 'AC') {
	  if (operation === null && operand1 !== null) {
	    let newOperand1 = `${operand1}`.slice(0, -1);
	    newOperand1 = newOperand1.length > 0 ? newOperand1 : 0;
	    newOperand1 = parseInt(newOperand1, 10);
	    setState({...state, operand1: newOperand1 });
	  } else if (operation !== null && operand2 !== null) {
	    let newOperand2 = `${operand2}`.slice(0, -1);
	    newOperand2 = newOperand2.length > 0 ? newOperand2 : 0;
	    newOperand2 = parseInt(newOperand2, 10);
	    newOperand2 = newOperand2 !== 0 ? newOperand2 : null;
	    setState({ ...state, operand2: newOperand2 });
	  }
	}
}