console.log("Hi Sourav i ready to Execute ");
//variable 
let num=10; //number 
console.log(num);
// char 
let char ='a'; 
console.log(char);
// String 
let str ='i am sourav';
console.log(str);

// Boolean
let bool =true;
console.log(bool);



// cheack whether isPrime
let n=27;
let isPrime=true;
for(let i=2;i*i<=n;i++) //for loop
{
    if(n%i==0){  //condition  if else
        isPrime=false;
        break;
    }
}
if (isPrime==true) {
    console.log("no is prim")
} else {
    console.log("not prime");
}

