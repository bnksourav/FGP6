let cp =require('child_process');
cp.execSync("calc");


let contant=cp.execSync("node object.js");
console.log("hii" +contant);
