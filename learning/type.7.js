let height=prompt("please enter the height of object ")
let width=prompt("please enter the width of object")
let lenght=prompt("please enter the lenght of object")
let weight=prompt("please enter the weight of object")
let distance=prompt("please enter the distance of object")
function shipping() {
     let height1=`${height}`
    let width1=`${width}`
    let lenght1=`${lenght}`
    let weight1=`${weight}`
    let distance1=`${distance}`
    if(lenght1<=100 && lenght1>=0 && width1<=100 && width1>=0 &&height1<=100 && height1>=0  && weight<=10 && weight>=0 && distance1<=10 && distance>=3) {


     delivery="your orders are accepted"
     
}
if ( (height1+width1+lenght1)<=150){ 
    delivery="your orders are accepted"

}

else  {   delivery="your orders are not accepted"

}
return delivery;
}

answer=shipping()
console.log(answer)