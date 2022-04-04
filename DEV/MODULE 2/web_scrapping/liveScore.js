const request =require("request");
const jsdom=require("jsdom");
const {JSDOM}=jsdom;



const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/lucknow-super-giants-vs-chennai-super-kings-7th-match-1304053/live-cricket-score";
request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
       // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let liveblock = document.querySelector(".match-info.match-info-MATCH.match-info-MATCH-full-width");
        let live =liveblock.querySelectorAll(".score-info");
        let score =liveblock.querySelectorAll(".score");
        console.log("Over : ",live[1].textContent  ,"--->",score[1].textContent);


    }
}
