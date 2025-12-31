const historyList = document.getElementById("history");
const datetime = document.getElementById("datetime");

function updateTime() {
  const now = new Date();
  datetime.innerText =
    "📅 วันที่: " + now.toLocaleDateString("th-TH") +
    " ⏰ เวลา: " + now.toLocaleTimeString("th-TH");
}
setInterval(updateTime, 1000);
updateTime();

function checkIn() {
  const now = new Date();
  const record = now.toLocaleDateString("th-TH") +
                 " - " +
                 now.toLocaleTimeString("th-TH");

  const data = JSON.parse(localStorage.getItem("checkins")) || [];
  data.unshift(record);
  localStorage.setItem("checkins", JSON.stringify(data));

  loadHistory();
}

function loadHistory() {
  historyList.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("checkins")) || [];
  data.forEach(item => {
    historyList.innerHTML += `<li>✔ ${item}</li>`;
  });
}
loadHistory();
