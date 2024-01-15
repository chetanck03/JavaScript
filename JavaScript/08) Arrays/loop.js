let a = [1,3,66,77,99]

// for ( let i =0 ; i<a.length;i++){
//     console.log(a[i]);
// }

// 1. For Each Loop
console.log('\n')
a.forEach((value, index , arr)=>{
    console.log(value,index,arr)
})


// 2. For-in Loop 
console.log('\n')
let object={
    a:1,
    b:2,
    c:3,
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key,element);
    }
}


//  3. For-of Loop
console.log('\n')
for (const iterator of a) {
    console.log(iterator)
    
}







