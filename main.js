//-----------We parse the json file---------------
let statsDatas;
var requestURL = 'data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function()
{
    statsDatas = request.response;
    console.log(typeof statsDatas);
    console.log(statsDatas[0].timeframes.daily);
}

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

function filterStats(filter)
{
    for(let elem in statsDatas)
    {   
        switch(statsDatas[elem].title)
        {
            case "Work":
                document.getElementById("work-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("work-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";
                break;
            case "Play":
                document.getElementById("play-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("play-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";   
                break;
            case "Study":
                document.getElementById("study-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("study-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";    
                break;
            case "Exercise":
                document.getElementById("exercise-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("exercise-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";   
                break;
            case "Social":
                document.getElementById("social-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("social-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";    
                break;
            case "Self Care":
                document.getElementById("care-current_h").innerText = statsDatas[elem].timeframes[filter].current+"hrs";
                document.getElementById("care-previous_h").innerText = "Previous - " + statsDatas[elem].timeframes[filter].previous+"hrs";    
                break;                            
        }
    }
}
dailyBtn.addEventListener("click", ()=>
{
    filterStats("daily");
    dailyBtn.style.color = "white";
    weeklyBtn.style.color = "rgb(164, 170, 219)";
    monthlyBtn.style.color = "rgb(164, 170, 219)";

});

weeklyBtn.addEventListener("click", ()=>
{
    filterStats("weekly");
    weeklyBtn.style.color = "white";
    dailyBtn.style.color = "rgb(164, 170, 219)";
    monthlyBtn.style.color = "rgb(164, 170, 219)";
});
monthlyBtn.addEventListener("click", ()=>
{
    filterStats("monthly");
    monthlyBtn.style.color = "white";
    weeklyBtn.style.color = "rgb(164, 170, 219)";
    dailyBtn.style.color = "rgb(164, 170, 219)";
});