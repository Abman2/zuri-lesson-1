document.addEventListener("DOMContentLoaded", () => {
function get(){return new Date().getTime()}
 
setInterval(() => { const time = get();
    document.getElementById("currentUTCTime").textContent= time;
},1)
const d = new Date().getDay()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("currentDayOfTheWeek").textContent = days[d]

})
