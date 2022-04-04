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
        let bowler=document.querySelectorAll(".table.bowler tbody tr");
        //console.log(bowler.length);
        let maxwic=0;
        let nameWic="";
        let count=0
        for(let i=0;i<bowler.length;i++){
            let tds=bowler[i].querySelectorAll("td");
            if(tds.length>1){
                 
                let name=tds[0].textContent;
                //console.log(name);
                let wicket=parseInt(tds[4].textContent);
                //console.log(wicket);
                if(maxwic<wicket){
                    maxwic=wicket;
                    nameWic=name;
                }
                count++;
            }
        }
        console.log(nameWic,"--->",maxwic);
    }
   
}