const request=require("request");
const jsdom =require("jsdom");
const fs=require("fs");
const json2xls=require("json2xls");
const { JSDOM }=jsdom;
let leaderbod=[];
let count=0;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let allScorCard=document.querySelectorAll('a[ data-hover="Scorecard"]');
        for(let i=0;i<allScorCard.length;i++){
            let link=allScorCard[i].href;
            let completelink="https://www.espncricinfo.com"+link;
            request(completelink,cb1);
            count++;
            //console.log(completelink);
        }
        console.log(allScorCard.length);
    }
    
    
}
function cb1(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let playerRow=document.querySelectorAll("table.batsman tbody tr");
        for(let i=0;i<playerRow.length;i++){
            let cells=playerRow[i].querySelectorAll("td");
            if(cells.length==8){
                let name=cells[0].textContent;
                let runs=cells[2].textContent;
                let balls=cells[3].textContent;
                let fours=cells[5].textContent;
                let sixs=cells[6].textContent;
                //let ining=cells[].textContent;
                //console.log(" name : ",name,"runs : ", runs,"balls: ",balls,"four: ",fours,"sixs",sixs);
                playerProfile(name,runs,balls,fours,sixs);

            }
        }
       count--;
       if(count==0){
           //console.log(leaderbod);
            let data = JSON.stringify(leaderbod);
            fs.writeFileSync('Bastman.json',data);
           //console.log(leaderbod.length);
          // let BDt=fs.readFileSync(Bastman.json)
           let BastmanDt=json2xls(leaderbod);
           fs.writeFileSync('BAtsmanDetail.xlsx', BastmanDt, 'binary');
       }
    }
}

function playerProfile(name,runs,balls,four,sixs){
    runs=Number(runs);
    balls=Number(balls);
    four=Number(four);
    sixs=Number(sixs)
    for(let i=0;i<leaderbod.length;i++){
        playrObj=leaderbod[i];
        if(playrObj.Name==name){
            playrObj.Runs+=runs;
            playrObj.Balls+=balls;
            playrObj.Four+=four;
            playrObj.Six+=sixs;
            playrObj.Ins++;
        return;
        }
    }
    let obj={
    Name:name,
    Runs:runs,
    Balls:balls,
    Four:four,
    Six:sixs,
    Ins:1,
    }
    leaderbod.push(obj);
}
// setTimeout(print, 120 * 1000);





// function print(){
//     console.log(leaderbod);
//     // let max=0;
//     // let MostRun="";
//     // for(let i=0;i<leaderbod.length;i++){
//     //     playrObj=leaderbod[i];
//     //     console.log(" name : ",playrObj["Name"],"runs : ", playrObj["Runs"],"balls: ",playrObj["Balls"],"four: ",playrObj["Four"],"sixs",playrObj["Six"]);
//     //     if(max<playrObj["Runs"]){
//     //         max =playrObj["Runs"];
//     //         MostRun=playrObj["Name"];
//     //     }
//     // }
//     //console.log("Most Run Scrorer : ",MostRun,"  : ", max);
//     console.log(leaderbod.length);
// }








