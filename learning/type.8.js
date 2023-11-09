let number = prompt("Please enter two_digits number");
function getNameofDigits() {
  let number1 = number;
  let number2 = number1 % 10;
console.log(number2);
let number3 = number1 / 10;
let number4=number3-((number2)/10)
console.log(number3)
  if (number >= 10 && number <= 20) {
    if (number == 10) {
      console.log("ten");
    }
    if (number == 11) {
      console.log("eleven");
    }
    if (number == 12) {
      console.log("twelve");
    }
    if (number == 13) {
      console.log("thirteen");
    }
    if (number == 14) {
      console.log("forteen");
    }
    if (number == 15) {
      console.log("fifteen");
    }
    if (number == 16) {
      console.log("sixteen");
    }
    if (number == 17) {
      console.log("seventeen");
    }
    if (number == 18) {
      console.log("eightteen");
    }
    if (number == 19) {
      console.log("nineteen");
    }
    if (number == 20) {
      console.log("twenty");
    }
  }
  if (number > 20 && number <= 99) {
    if (number4 == 2) {
      answer1="twenty" 
      // console.log(answer1);
      }
      if (number4 == 3) {
       answer1="thirty"
        // console.log(answer1);
      }
      if (number4 == 4) {
        answer1="fourty"

    //  console.log(answer1);
       
      }
      if (number4 == 5) {
        answer1="fifty"
        // console.log(answer1);
      }
      if (number4 == 6) {
        answer1="sixty"
        // console.log(answer1);
      }
      if (number4 == 7) {
        answer1="seventy"
        // console.log(answer1);

      }
      if (number4 == 8) {
        answer1="eighty"
        // console.log(answer1);

      }
      if (number4 == 9) {
        answer1="ninety"
        // console.log(answer1);
      }
    if (number2 == 1) {
      answer2="one"
      // console.log(answer2);
    }
    if (number2 == 2) {
      answer2="two"
      // console.log(answer2);
    }
    if (number2 == 3) {
      answer2="three"
      // console.log(answer2);
    }
    if (number2 == 4) {
      answer2="four"
      // console.log(answer2);
    }
    if (number2 == 5) {
      answer2="five"
      // console.log(answer2);
    }
    if (number2 == 6) {
      answer2="six"
      // console.log(answer2);
    }
    if (number2 == 7) {
      answer2="seven"
      // console.log(answer2);
    }
    if (number2 == 8) {
    answer2="eight"
    // console.log(answer2);
    }
    if (number2 == 9) {
      answer2="nine"
      // console.log(answer2);
    }
    return answer1+ " " +answer2 ;
}
}
answer=getNameofDigits()
console.log(answer)
