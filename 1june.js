// let globalvar = "I'am global!";
// function myFunction(){
//     let localVar = "I'am lacalvar";
//     console.log(globalvar);
//     console.log(localVar);
// }
// myFunction();
// console.log(globalvar);
// console.log(localVar);

//2june.js

// console.log(dog);
// var dog= "bruno";
// console.log(dog);

// console.log(typeof undefined);
// console.log(typeof null);

// console.log(null === undefined);

// function fly(){
//     let plane = "boeing 747";
//     console.log(plane);
// }
// fly()
// console.log(plane);

// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// let a = outer()
//     a();
//     a();
// const b = outer()
//     b();

function createPlayer(playerName){
    let score = 0;
    return function(){
        score += 10;
        return playerName + " has " + score + "points ";
    }
}
const player1 = createPlayer("Mario");
const player2 = createPlayer("luigi");
console.log(player1());
console.log(player2()) ;
console.log(player2());