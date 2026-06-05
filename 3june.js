//.1
// function makeSubtractor(minusNum){
//     let num = 3;
//     return function(){
//         subtract = 10;
//         return subtract-num;
//     }
// }

// const result = makeSubtractor();
// console.log(result());

//.2
// function makeFileNamer(extension){
//     return function(string){
//         return string+extension;
//     }
// }
// const makeImage = makeFileNamer(".png");
// const makeSong = makeFileNamer(".mp3");

// console.log(makeImage("profile-pic"));
// console.log(makeSong("favorite-tune"));

//.3
// function makeRepeater(times){
//        return function(string){
//         return string.repeat(times);
//        }
// }
// const tripleText = makeRepeater(3);
// console.log(tripleText("hello world "));

//.4
// function makePasswordChecker(correctpassword){
//     return function(String){
//       return String===correctpassword;
//     }
// }
// const password = makePasswordChecker("suhani28");
// console.log(password("wrongpass"));
// console.log(password("suhani28"));

//.5
// function makeCurrencyFormatter(Symbol){
//     return function(number){
//         return Symbol+number;
//     }
// }
// const sing = makeCurrencyFormatter("$");
// console.log(sing(445));

//.6
function createATM(){
    let dailyLimit = 100;
    return function(amount){
        if(amount <= dailyLimit){
            dailyLimit -= amount;
            return "success! Remaining daily limit";
        }else{
            return "fail! limit cross";
        }
    }
}
const widhrow = createATM();
console.log(widhrow(380));