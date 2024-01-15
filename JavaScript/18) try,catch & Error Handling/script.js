// prompt: Take input from user
let a = prompt("Enter a number : ")
let b = prompt("Enter b number : ")

// NaN : Error give String values
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this not allowed")
}

// parseInt: String convert into int
let sum = parseInt(a)+parseInt(b);
console.log("The sum is : ",sum)

// try to run code, if it's working then okay & if not working then throw it
function main(){
    
    let x =2;
    try {
        console.log("The sum is : ",sum*x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bai")
        return false
    }
    
    // finally: used when we want to run the code after using return function
    finally {
        console.log("Files are being closed and Db connection is being closed")
    }
}


let c = main()

