const calculator = document.querySelector(".calculator");

const keys = document.querySelector(".calculator-keys");

const display = document.querySelector(".calculator-display");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;

  const keyValue = key.textContent;

  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === "number") {
    if (displayValue === "0") {
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (type === "operator") {
    const operatorKeys = keys.querySelectorAll("[data-type=operator]");
    //allows one operator to be selected at a time
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    console.log(operatorKeys);
    key.dataset.state = "selected";

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type == "equal") {
    //perform a calculation
    const firstNumber = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);
    display.textContent = calculate(firstNumber, operator, secondNumber)
  }
  calculator.dataset.previousKeyType = type;
    });

    function calculate(firstNumber, operator, secondNumber) {
      firstNumber = parseInt(firstNumber)
      secondNumber = parseInt(secondNumber)
      let result = "";
    if (operator === "plus") result = firstNumber + secondNumber;
    if (operator === "times") result = firstNumber * secondNumber;
    if (operator === "divide") result = firstNumber / secondNumber;
    if (operator === "minus") result = firstNumber - secondNumber;
    return result


    }

     
  

  

