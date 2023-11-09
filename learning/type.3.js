let names=prompt("please enter the name of products")
let unitprice=prompt("please enter the unit price")
let quantity=prompt("please enter the quantity of products")
let promotion=prompt ("please write yes or no for promotion code")

function receipt() {
 let names1=`${names}`
let unitprice1=`${unitprice}`
let quantity1=`${quantity}`
let promotion1=`${promotion}`
console.log(names1)
console.log(unitprice1)
console.log(quantity1)
console.log(promotion1)
 if (quantity>=5 && promotion1=="yes"){
    calculation=(`${unitprice1}` * `${quantity1}`)*0.75
    return calculation;
}
 else if (quantity>=5){
     calculation=(`${unitprice1}` * `${quantity1}`)*0.9
    return calculation;
 }
else if (promotion1=="yes") {

    calculation=(`${unitprice1}` * `${quantity1}`)*0.85
    return calculation;
 
}
}
const answer=receipt ()
console.log(answer) 
