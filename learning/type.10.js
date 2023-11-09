let p=prompt("please enter the initial amount")
let n=prompt("please enter the duration in year")
let r=prompt("please enter percent per year")
 function deposit() {
    let p1=`${p}`
    let n1=`${n}`
    let r1=`${r}`
    sum= Number(p1)+p1*((1+r1/100)**n1 - 1)
    sum1=Math.round(sum)
    return sum1;
    
 }
answer=deposit()
console.log(answer)
