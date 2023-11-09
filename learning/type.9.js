
const userNumber = prompt("Please enter a number:");
function printDivisibleNumbers(userNumber) {
    for (let i = 1; i <= 1000; i++) {
      if (i % userNumber === 0) {
        console.log(i);
      }
    }
  }
printDivisibleNumbers(userNumber);