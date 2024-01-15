
function nice(name) {
    console.log("Hey "+name+" you are nice!")
    console.log("Hey "+name+" you are good!")
    console.log("Hey "+name+" your tshirt is nice!")
    console.log("Hey "+name+" your course is good too!")
    
}

// nice("CHETAN")
// nice("Gautam")


function sum (a,b,c=1){
    console.log(a,b,c)
    return a+b+c
}

result = sum(2,3)
console.log("The sum of these numbers is :", result)



const func = (x) => {
    console.log("I Am an Arrow Function ",x)
}

func(1);
func(2);