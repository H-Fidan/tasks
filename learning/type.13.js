const denominations = [100, 50, 20, 10, 5, 1]
const amount = prompt("enter the amount of money")


function getBanknotes (denominations, amount) {
    let a = amount % 100
    let b = a % 50
    let c = b % 20
    let d = c % 10
    let f = d % 5

    const units_of_hundred = Math.floor(amount / 100);
    const units_of_fifty = Math.floor(a / 50);
    const units_of_twenty = Math.floor(b / 20);
    const units_of_ten = Math.floor(c / 10);
    const units_of_five = Math.floor(d / 5);
    const units_of_one = Math.floor(f / 1);


    console.log( units_of_hundred + " units of hundred;") 
    console.log(units_of_fifty + " units of fifty;")  
    console.log(units_of_twenty + " units of twenty;")  
    console.log(units_of_ten + " units of ten;") 
    console.log(units_of_five + " units of five;")
    console.log(units_of_one + " units of one;")
}
getBanknotes(denominations, amount)
  
           

        
        



