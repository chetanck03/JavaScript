async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// IIFE : Immediately Invoked (call) Function Expression

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()


// Destructuring : Assignment is used to unpack values from an array or distinct variables
let [x,y] = [1,3]
console.log(x,y)

let [a,b,...rest] = [1,3,4,7,9,0]
console.log(a,b,rest)

let obj={
    c:1,
    d:6,
    e:9
}

let {c,d} = obj
console.log(c,d)