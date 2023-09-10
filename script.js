document.addEventListener("DOMContentLoaded", () => {
function getCurrentTimeInMillis() {
  return new Date().getTime();
}

function updateCurrentTime() {
  const currentTime = getCurrentTimeInMillis();
  const currentTimeMillisElement = document.getElementById("currentUTCTime");
  currentTimeMillisElement.textContent = currentTime;
}

// Call the updateCurrentTime function initially to set the content
updateCurrentTime();

// Refresh the content every 1 second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);

const d = new Date().getDay()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("currentDayOfTheWeek").textContent = days[d]

})
