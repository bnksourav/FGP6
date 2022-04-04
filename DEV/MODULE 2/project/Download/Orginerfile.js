//console.log("hello");
let fs=require("fs");
const path = require("path");

//let folderpath=process.argv[2];
 let folderpath=path.join(__dirname,"Download");
let folderexist=fs.existsSync(folderpath);
//let folderexist
//console.log(folderexist);
let extension={
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".pdf",".txt"],
    Image:[".jpeg",".jpg"],
    Software:[".exe"]
};

if(folderexist){
    let file=fs.readdirSync(folderpath);
    for(let i=0;i<file.length;i++){
        let ext=path.extname(file[i]);
        let nameOfFolder=giveFolderName(ext);
      //  console.log("Exit -- ",ext,"Folder--",nameOfFolder);
        let pathOfFolder=path.join(folderpath,nameOfFolder);
        let exit=fs.existsSync(pathOfFolder);
        if (exit) {
            moveFile(folderpath,pathOfFolder,file[i])
        } else {
            fs.mkdirSync(pathOfFolder)
            moveFile(folderpath,pathOfFolder,file[i])
        }
    }   // console.log(file);


}
else{
    console.log("Please Enter a valid path !!!!! ");
}
function giveFolderName(ext){
    for(let key in extension){
        let extarr=extension[key];
        for(let i=0;i<extarr.length;i++){
            if(extarr[i]==ext)
            {
                return key;
            }
        }
    }
    return 'Other';
}
function moveFile(folderpath,pathOfFolder,filename){
    let sourcepath=path.join(folderpath,filename);
    let destpath=path.join(pathOfFolder,filename);
    fs.copyFileSync(sourcepath,destpath);
    fs.unlinkSync(sourcepath);
}
