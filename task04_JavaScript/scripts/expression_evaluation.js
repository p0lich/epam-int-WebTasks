function evaluateExpression() {
    let expression = document.getElementById('expression_input').value;
    let result = parse(expression);
    document.getElementById('expression_output').value = result;
}

function parse(expression) {
    if(expression[expression.length - 1] != "=") {
        alert("there must be letter \"=\" in the end");
        return null;
    }

    let normalizeString = expression.replace(/ /g,'').slice(0, -1);

    if(!expressionCheck(normalizeString)) {
        alert("can't parse this expression");
        return null;
    }

    let result = parsePlusSeparatedExpression(normalizeString, '+');   
    return result;
};

function expressionCheck (expression) {
    let commaCounter = 0;
    let operatorCounter = 0;

    if(/\+|\*|\/|\^/.test(expression[0])) {
        return false;
    }

    for(let i = 0; i < expression.length - 1; i++) {
        if(/\+|\-|\*|\/|\^|\.|\d/.test(expression[i]) == false) {
            return false;
        }

        if(expression[i] === ".") {
            commaCounter++;
        } else {
            commaCounter = 0;
        }

        if(/\+|\-|\*|\/|\^/.test(expression[i])) {
            operatorCounter++;
        } else {
            operatorCounter = 0;
        }

        if(commaCounter > 1) {
            return false;
        }

        if(operatorCounter > 1) {
            return false;
        }
    }

    return true;
};

function split(expression, operator) {
	let result = [];
	let expressionPart = "";

	for (let i = 0; i < expression.length; ++i) {
		let curChar = expression[i];
		if (operator == curChar) {
			result.push(expressionPart);
			expressionPart = "";
		} else {
            expressionPart += curChar;
        }
	}

	if (expressionPart != "") {
		result.push(expressionPart);
	}

	return result;
};

// first statement to proceed '/'
function parseDivideSeparatedExpression(expression) {
    let numbersString = expression.split('/');
	let numbers = numbersString.map(numStr => +numStr);
	let initialValue = Math.pow(numbers[0], 2);
	let result = numbers.reduce((acc, num) => acc / num, initialValue);
	return result;
}

// '/' '*' will be proceed
function parseMultiplicationSeparatedExpression(expression) {
	let numbersString = expression.split('*');
	let numbers = numbersString.map(numStr => parseDivideSeparatedExpression(numStr));
	let initialValue = 1.0;
	let result = numbers.reduce((acc, num) => acc * num, initialValue);
	return result;
};

// '/' '*' '-' will be procced
function parseMinusSeparatedExpression(expression) {
	let numbersString = expression.split('-');
	let numbers = numbersString.map(numStr => parseMultiplicationSeparatedExpression(numStr));
	let initialValue = numbers[0];
	let result = numbers.slice(1).reduce((acc, num) => acc - num, initialValue);
	return result;
};

// '/' '*' '-' '+' will be procced
function parsePlusSeparatedExpression(expression) {
	let numbersString = expression.split('+');
	let numbers = numbersString.map(numStr => parseMinusSeparatedExpression(numStr));
	let initialValue = 0.0;
	let result = numbers.reduce((acc, num) => acc + num, initialValue);
	return result;
};