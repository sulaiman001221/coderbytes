function missingDigit(str) {
  function findMissingValue(result, expression) {
    const coefficient = expression.replace(/\D/g, "");
    const missingValue = `${result}`
      .split("")
      .filter((value) => !coefficient.includes(value));
    const finalResult = parseInt(missingValue.join(""), 10);
    return finalResult ? finalResult : 0;
  }

  const numArr = str.split(" ");
  const firstValue = numArr[0];
  const secondValue = numArr[2];
  const operator = numArr[1];
  const answer = numArr[numArr.length - 1];

  const switchOperator = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
  };
  let valueWithX;
  let newEquation;

  if (numArr[0].includes("x")) {
    newEquation = [answer, switchOperator[operator], secondValue];
    valueWithX = numArr[0];
  } else if (numArr[2].includes("x")) {
    newEquation = [answer, switchOperator[operator], firstValue];
    valueWithX = numArr[2];
  } else if (numArr[numArr.length - 1].includes("x")) {
    newEquation = [firstValue, operator, secondValue];
    valueWithX = numArr[numArr.length - 1];
  } else {
    return 0;
  }

  const [newFirstValue, newOperator, newSecondValue] = newEquation;
  let missingValue;

  switch (newOperator) {
    case "+":
      missingValue = parseInt(newFirstValue) + parseInt(newSecondValue);
      break;
    case "-":
      missingValue = parseInt(newFirstValue) - parseInt(newSecondValue);
      break;
    case "/":
      missingValue = parseInt(newFirstValue) / parseInt(newSecondValue);
      break;
    case "*":
      missingValue = parseInt(newFirstValue) * parseInt(newSecondValue);
  }

  return findMissingValue(missingValue, valueWithX);
}

console.log(missingDigit("1x0 * 12 = 1200")); // 0
console.log(missingDigit("4 - 2 = x")); // 2
console.log(missingDigit("50 / 2 = 2x")); // 5
