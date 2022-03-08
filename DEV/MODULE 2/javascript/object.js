let obj={};
console.log(obj);

let objSk={

name : "sourav",
age : 23,
phoneNo: 9102520400,
lastname:"Pandit"
};
console.log(objSk);

let Sourav={
    name : "Sourav kumar ",
    age :23,
    friend:['Dheeraj','Sajan'],
    address:{
        city: "banka",
        state:"Bihar"
    },
    sayHii:function(){
        console.log("Welcome to sourav friend")
    }
}
// console.log(Sourav);
console.log(Sourav.name);
console.log(Sourav.age);
console.log(Sourav.friend);
console.log(Sourav.friend[0]);
console.log(Sourav.address);
console.log(Sourav.address.city);
console.log(Sourav.sayHii);

//call fn sayHii
Sourav.sayHii();
// add a key to obj 
Sourav.Movies=["Aventure",'civil war'];
console.log(Sourav);

//delet a key 
delete Sourav.Movies;
console.log(Sourav);

// Second method to access a key
console.log(Sourav.name);
console.log(Sourav['name']);





