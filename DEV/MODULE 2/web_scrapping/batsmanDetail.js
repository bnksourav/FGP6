const request =require("request");
const jsdom=require("jsdom");
const {JSDOM}=jsdom;



const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/gujarat-titans-vs-lucknow-super-giants-4th-match-1304050/full-scorecard";
request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
       // console.log(html);
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsman=document.querySelectorAll(".batsman-cell.text-truncate.out a");
        for(let i=0;i<batsman.length;i++){
            let batsmanLink=batsman[i].href;
            let completeLink="https://www.espncricinfo.com"+batsmanLink;
           // console.log(completeLink);
            request (completeLink,cp1);
        }
        //console.log(batsman.length);

    }
}
function cp1(error,response,html){
    if(error){
        console.log(error);
    }else{
       // console.log(html);
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsmandet = document.querySelector(".player-card-padding .player_overview-grid");
        //console.log(batsmandet);
        let playrH5 = batsmandet.querySelectorAll("div h5");
        let playername=playrH5[0].textContent;
        let DOB=playrH5[1].textContent;
        console.log("Full Name :  ",playername,"    --->    Date of Birth : ",DOB );
    }
}