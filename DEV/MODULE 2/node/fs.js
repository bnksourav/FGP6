let fs= require("fs");
//console.log(fs);
let path = require("path");

let filePath=path.join(__dirname, "file.js");
//create file
fs.writeFileSync(filePath, "hello from my site");

let content =fs.readFileSync(filePath,'utf-8');

console.log(content);   
// u update
fs.appendFileSync(filePath," Update file");
console.log(fs.readFileSync(filePath,'utf-8'));
// D delete
fs.unlinkSync(filePath)
