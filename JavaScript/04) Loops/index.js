console.log("I am using Loops")


// 1. FOR LOOP
let a=1
for (let i = 0; i < 5; i++) {
    console.log(a+i);
}

let obj ={
    name : "Chetan",
    role : "Programmer",
    company : "CodingWithChetan"
}

// 2. FOR IN LOOP

for (const key in obj) {
        // const element = obj[key];
        // console.log(key,element)
        console.log(key)
}


//3.  FOR OF LOOP

for (const c of "chetan") {
    console.log(c)
}

//4. WHILE LOOP

let i =5;
while(i<6){
    console.log(i)
    i++;
}

//5. DO WHILE LOOP
let b =3;
 do {
    console.log(b)
    b++;
 } while (b<6);










