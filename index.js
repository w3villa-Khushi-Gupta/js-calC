        let currentOperator = '';
        let currentValue = '';
        let resultValue = '';
        let op = 0;

        function number(num) {
            currentValue += num;
            document.getElementById('result').value = currentValue;
        }

        function operator(operator) {
            document.getElementById('result').value += operator;
            currentOperator = operator;
            resultValue = currentValue;
            currentValue = '';
        }

        function calculate() {
            let result = 0;
            const num1 = parseFloat(resultValue);
            console.log (resultValue)
            console.log (currentValue)

            const num2 = parseFloat(currentValue);

            if (currentOperator === '+') {
                result = num1 + num2;
            } else if (currentOperator === '-') {
                result = num1 - num2;
            } else if (currentOperator === '*') {
                result = num1 * num2;
            } else if (currentOperator === '/') {
                result = num1 / num2;
            }

            document.getElementById('result').value = result;
            currentValue = result.toString();
            currentOperator = '';
            resultValue = '';
        }

        function clearResult() {
            currentValue = '';
            document.getElementById('result').value = '';
        }
