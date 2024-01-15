// It perfoms wrong operations as 10% of the times:

// + ---> -
// * ---> +
// - ---> /
// / ---> **


let random = Math.random()

let a = prompt("Enter 1st number : ")
let b = prompt("Enter 2nd number : ")
let c = prompt("Enter operations : ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

console.log(random)
if(random > 0.1){
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
     // Perform wrong calculation
     c = obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}