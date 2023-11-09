const individual_code = prompt("enter the individual code of a user");

function getDigitsSum (individual_code) {
    let sum = 0
    for (i=0; i < individual_code.length; i++) {
        sum = sum + Number(individual_code[i])
    }
    return sum;
}
const answer = getDigitsSum (individual_code)
console.log(answer)

