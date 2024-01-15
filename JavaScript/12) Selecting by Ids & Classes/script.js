console.log("CHETAN")

// 1. By ClassName 
let a = document.getElementsByClassName("box")
console.log(a)
a[2].style.backgroundColor = "yellow"

// 2. By Id
document.getElementById("ck").style.backgroundColor = "red"

// 3. By querySelector

//  a) Only for First Element
document.querySelector(".box").style.backgroundColor = "green"

//  b) For all Elements

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "pink";
// })

console.log(document.querySelectorAll(".box"))

