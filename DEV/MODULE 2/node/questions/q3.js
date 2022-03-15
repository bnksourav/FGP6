//copy index.html file from module1 to a new folder inside module2 having name html.
let fs=require("fs");
let path=require("path");

let sourcepath=path.join(__dirname,"..","..","..","MODULE1","index.html");
console.log(sourcepath);
let distanationpath=path.join(__dirname,"..","..","index.html"); // .. mean to move to back folder or dir
console.log(distanationpath);
fs.copyFileSync(sourcepath,distanationpath);