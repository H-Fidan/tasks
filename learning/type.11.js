const order_number = prompt("Enter the number of orders:")

function getLoyaltyPoints(order_number) {
    let award_point = [0, 1];
    for (i = 2; i<= order_number; i++){
        award_point[i] = award_point[i - 2] + award_point[i - 1];
    }
   return award_point;
}
const answer = getLoyaltyPoints(order_number)
console.log(answer)




