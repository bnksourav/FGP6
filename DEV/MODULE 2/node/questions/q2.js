// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs=require("fs");

let path=require("path");

let arr=['audio','video','software','documents','applications','other'];
let namearr=['abc','efg','xyz','def'];
let extarr=['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisepath=path.join(__dirname,"organise");

if(!fs.existsSync(organisepath))
    fs.mkdirSync(organisepath);

for(let i=0;i<arr.length;i++){
    let folderkaPath=path.join(organisepath,arr[i]);
    if(!fs.existsSync(folderkaPath))
        fs.mkdirSync(folderkaPath)

    for(let j=0;j<namearr.length;j++)
    {
        let filename=namearr[j]+extarr[i];
        let fileKapath=path.join(folderkaPath,filename);
        fs.writeFileSync(fileKapath,"")
    }
}


