// function makeCoffeeTracker(maxCup){
//     return function(NOC){
//         let Remainingcup;
//         if(NOC < maxCup){
//             Remainingcup = maxCup - NOC;
//             return Remainingcup;
//         }else if(NOC>maxCup){
//             return "out of limit";
//         }
//         else{
//             return maxCup;
//         }
//     }
// } 
// const limit = makeCoffeeTracker(7);
// console.log(limit(5));

//2.
// function makeTicketBoot(basePrice){
//     return function(weekDay){
//         let level;
//         if(weekDay === basePrice){
//             return basePrice;
//         }else if(weekDay != basePrice){
//             return basePrice+5;
//         }else{
//             return "invalid days"
//         }
//     }
// }
// const days = makeTicketBoot(1000);
// console.log(days(3000));

//3.
// async function helloWorld(){
//     console.log("start");

//     for(let i = 0; i<5; i++)
//         console.log("Loop numbers",i);
// setTimeout(function(){
//     console.log("inside function")
// },6000)
// }
// helloWorld();

//4.
async function subtractTimer(){
      console.log("Starting substraction");

      setTimeout(function(){
        let num1 = 20;
        let num2 = 8;
        console.log("Substraction",num1-num2);
      },2000)
}
subtractTimer();   
