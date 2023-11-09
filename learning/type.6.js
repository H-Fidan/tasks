let  names=prompt("please enter your name")
let age=prompt("please enter your age")
let the_number_of_orders=prompt("please enter your the number of orders ")
let the_amount_of_orders=prompt("please enter the amount of the orders")
 function discount() {
    let names1=`${names}`
    let age1=`${age}`
    let the_number_of_orders1=`${the_number_of_orders}`
    let the_amount_of_orders1=`${the_amount_of_orders}`
    if( age1>=60) {
        promotion="we apply the discount"
        return promotion;
    }
   if(the_number_of_orders1>=4 && the_amount_of_orders1>=100) {
   promotion="we apply the discount"
 return promotion;
   }
  else  {
    promotion="we can't apply the discount"
return promotion;
   }
}
const answer=discount()
console.log(answer)