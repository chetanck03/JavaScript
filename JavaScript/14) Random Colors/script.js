console.log("Script.js initializing")

//  Method 1 

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// Method 2

let boxes = document.querySelector(".container").children
    //  Formula : A + Random (B-A)
    // 1. 0+ MathRandom()*255
    // For integer value use ceil :
    // 2.  Math.ceil(0 + Math.random() * 255)


function getRandomColor(){
    let a = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    let c = Math.ceil(0 + Math.random() * 255);
    return `rgb(${a},${b},${c})`
}

Array.from(boxes).forEach( e => {
e.style.backgroundColor = getRandomColor()
e.style.color = getRandomColor()
});