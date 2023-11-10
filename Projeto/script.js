function calculate(operation) {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      let result;

      switch (operation) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num