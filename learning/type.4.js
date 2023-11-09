let guests=prompt("please enter the number of the guesst")
function table_number() {
    let guests1=`${guests}` 
    console.log(guests1)
    console.log(guests1)
    if(guests1<=2 && guests1>0 ) {
        tables="1 small table"
        return tables;
    }
    else if(guests1<=4 && guests1>2) {
        tables="1 medium table"
        return tables;

    }
   else if(guests1<=8 && guests1>4) {
     tables="1 large table"
     return tables;

   }
  
}
const answer=table_number()
console.log(answer)