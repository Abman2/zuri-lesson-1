document.addEventListener("DOMContentLoaded", () => {
const time =new Date().getTime()
document.getElementById("currentUTCTime").textContent = time
setTimeout(() => {
    window.location.reload();
},2000)
const d = new Date().getDay()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("currentDayOfTheWeek").textContent = days[d]

})
