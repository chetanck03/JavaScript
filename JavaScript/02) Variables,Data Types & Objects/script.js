console.log("hey this is Chetan")

var a=5;
a = a+1;
var b=6;
var c="Chetan";
var _d="ck";
// var 55a="CK";

console.log(a+b+2+c);
console.log(typeof a, typeof b , typeof c)


// DOES NOT CHANGE THE VALUE 
// IF WE GIVE THE ONE VALUE

// const a1 = 6;
// a1 = a1+1;

{
    let a =66;
    console.log(a)
    // 66   (let) is block scoped
}
console.log(a)
// 6    (var) is globally scoped


// DATA TYPES

let x = "CHETAN"
let y = 22;
let z = 3.33;
const p = true;
let q = undefined;
let r = null;

console.log (x,y,z,p,q,r)
console.log (typeof x,typeof y,typeof z,typeof p,typeof q ,typeof r)



let o = {
    name:"CHETAN",
    "job code": 5600,
}
console.log(o);

o.salary = "100crores";
console.log(o);
