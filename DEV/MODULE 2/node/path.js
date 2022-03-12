//"C:\Users\soura\OneDrive\Desktop\FJP6\DEV\MODULE 2\node\path.js"
const { dirname } = require("path");
let path=require("path");
let extantName=path.extname("C:\Users\soura\OneDrive\Desktop\FJP6\DEV\MODULE 2\node\childprocess.js");
console.log(extantName);

let baseName=path.basename(__filename);

let dirpath=__dirname;
console.log(baseName);

console.log(__dirname);

console.log(__filename);

let newpathFile=path.join(dirpath,"Sourav.js");
console.log(newpathFile);