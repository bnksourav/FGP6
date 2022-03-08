// function in js without parameter 
function sayHello(){
    console.log("Hello from function");
}
sayHello();
//function with parameter 
function sum(num1,num2){
    let addition =num1+ num2;
    console.log("addition of two : "+addition);
}
sum(3,5);

//function with return type 
function multiply(num1,num2){
    let mul=num1*num2;
    return mul;
}
let mult=multiply(5,10);

//let a=function sub(num3,num4)
//{
//
//}

// IIfI
(function(){
    console.log("HELLO FROM IIFI ");
})();

//IIFI with paramater
(function(num1,num2){
console.log(num1/num2);
})(10,5);
