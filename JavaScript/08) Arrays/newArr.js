let arr=[1,2,3,4,5]

// let newArr =[]
// for ( let i =0 ; i<arr.length;i++){
//     const element = arr[i];
//     newArr.push(element**2)
// }
// console.log(newArr)


// 1. Shortcut to create new array using map
let NewArr = arr.map((e) =>
{
    return e**3
})
console.log(NewArr)
 

// 2. Filter

console.log("\n")
const a = (e) =>{
    if(e>3){
        return true
    }
    return false
}
console.log(arr.filter(a))

// 3. Reduced used any elements

console.log("\n")
let a1 =[1,2,3]
const red =(a,b) =>{
    return a+b
}
console.log(a1.reduce(red))

// 4. convert string into array using Array.from

console.log("\n")
let c = Array.from("CHETAN")
console.log(c)




