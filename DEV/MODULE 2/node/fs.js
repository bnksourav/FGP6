 let fs= require("fs");
// //console.log(fs);
 let path = require("path");

// let filePath=path.join(__dirname, "file.js");
// //create file
// fs.writeFileSync(filePath, "hello from my site");

// let content =fs.readFileSync(filePath,'utf-8');

// console.log(content);   
// // u update
// fs.appendFileSync(filePath," Update file");
// console.log(fs.readFileSync(filePath,'utf-8'));
// // D delete
// fs.unlinkSync(filePath)

// //fs.copyFile("C:\Users\soura\OneDrive\Desktop\FJP6\DEV\MODULE 2\node\test.js","C:\Users\soura\OneDrive\Desktop\FJP6\DEV\MODULE 2\javascript");

// Create directory 
if(!fs.existsSync("hamariDirectory"))
    fs.mkdirSync("hamariDirectory");


//    Read a Directory

// let folderpath=__dirname;

// let folderCantant=fs.readdirSync(folderpath);
// console.log(folderCantant);
fs.rmdirSync("hamariDirectory");

//copy diractory

let sourcepath=path.join(__dirname,"test.js");
let distanationpath=path.join(__dirname,"mod","test.js");
fs.copyFileSync(sourcepath,distanationpath);



