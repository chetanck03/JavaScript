// 1. async: means Function run at background
// 2. await: Waiting for the Function run
// 3. settle: Resolve or Reject
// 4. resolve : Promise has settled successfully
// 5. reject : Promise has not settled successfully

// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);

//     })
// }

async function getData(){
    // Simulate getting data from a (json placeholder)
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    // return 456
   
}

async function main(){

    console.log("Loading modules")
    
    console.log("Do something else")
    
    console.log("Load data")
    
    // await: Waiting for the Function run
    let data = await getData()
    
    console.log(data)
        
    console.log("Process Data")
}

main()


// Wait For Data

// data.then((v)=>{
    
//     console.log(data)
    
//     console.log("Process Data")
// })