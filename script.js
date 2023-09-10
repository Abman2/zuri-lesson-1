document.addEventListener("DOMContentLoaded", () => {
function get{let time =new Date().getTime()}
document.getElementById("currentUTCTime").textContent = time;
let t=setTimeout(() => {
    get();
},1)
const d = new Date().getDay()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("currentDayOfTheWeek").textContent = days[d]

})
