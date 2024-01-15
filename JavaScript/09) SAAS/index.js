let rand =Math.random()
// 100 % divide into 3 parts = 0  0.33  0.66   1
let first,second,third;


// Fist Word
        if(rand<0.33){
            first="Crazy"
        }
        else if (rand<0.66 && rand>=0.33){
            first="Amazing"
        }
        else{
            first="Fire"
        }

// Second Word
rand =Math.random()
        if(rand<0.33){
            second="Engine"
        }
        else if (rand<0.66 && rand>=0.33){
            second="Foods"
        }
        else{
            second="Garments"
        }

// Third Word
rand =Math.random()
        if(rand<0.33){
            third="Bros"
        }
        else if (rand<0.66 && rand>=0.33){
            third="limited"
        }
        else{
            third="Hub"
        }


console.log(`${first} ${second} ${third}`)

