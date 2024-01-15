console.log("CHETAN")
console.log("CK")

// settimeout run at the last
setTimeout(() => {
    console.log('I am inside the settimeout')
}, 2000);

console.log("The End")

// 1. CallBack = Function passed into another function as an argument
const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src,callback) => {
    let sc= document.createElement("script");
    sc.src = src;
    sc.onload = callback("Gautam");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)














