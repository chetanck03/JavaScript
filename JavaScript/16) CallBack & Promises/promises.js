console.log("This is Promises")

// Promises
let a = new Promise((resolve,reject)=>{
    let p = Math.random();

    if(p<0.5){
        reject("No Random Number was not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("GAUTAM")
        }, 3000);
    }
})

let b = new Promise((resolve,reject)=>{
    let p = Math.random();

    if(p<0.5){
        reject("No Random Number was not supporting you")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("GAUTAM 2")
        }, 3000);
    }
})

// Taking variable data 

// a.then((b)=>{
//     console.log(b)
// }).catch((err)=>{
//     console.log(err)
// })



let c = Promise.all([a,b])

c.then((p)=>{
    console.log(p)
}).catch((err)=>{
    console.log(err)
})












