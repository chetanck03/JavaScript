// let obj = {
//     a:1,
//     b:"CHETAN",
// }
// console.log(obj)



// let animal ={
//     eats:true,
// };
// let rabbit = {
//     jumps:true,
// };
// rabbit.__proto__ = animal;  //ProtoType: Additional Properties of the Object


class Animal{
    // constructor always run
    constructor(name){
        this.name=name
        console.log("Object is created...")
        console.log(name)
    }

    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}

// extend : Add function of another classes
class Lion extends Animal{

    constructor(name){
        //super:using to call another classes if we overriding
        super(name)
        console.log("Object is created and he is lion...")
        console.log(name)
    }

}

let a = new Animal("chetan");
console.log(a)

let l= new Lion("Shera")
console.log(l)