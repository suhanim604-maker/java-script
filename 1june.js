let globalvar = "I'am global!";
function myFunction(){
    let localVar = "I'am lacalvar";
    console.log(globalvar);
    console.log(localVar);
}
myFunction();
console.log(globalvar);
console.log(localVar);