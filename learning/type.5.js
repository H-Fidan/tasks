let number1=prompt("please enter the temperature of country 1")
let number2=prompt("please enter the temperature of country 2")
let number3=prompt("please enter the temperature of country 3")
 function temperature(){
    let numbers1=`${number1}`
    let numbers2=`${number2}`
    let numbers3=`${number3}`
 const temperatures=[numbers1, numbers2 ,numbers3 ]
 temperatures.sort(function(a, b){return b - a});
 return temperatures;
 }
 const answer=temperature()
 console.log(answer)