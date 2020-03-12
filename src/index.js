/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
function addNumber() {
  let count = 0;

  return function(number) {
    return count += number;
  };
}

function counter(startNumber, stepNumber) {
  let number = startNumber;

  return {
    clean:function() {
      return number = 0;
    },
    count:function() {
      return number += stepNumber;
    }
  };
}