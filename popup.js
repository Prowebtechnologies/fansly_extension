var port = chrome.runtime.connect({
  name: "FanslyChannel"
});
port.postMessage("Hi");
port.onMessage.addListener(function (msg) {
  if (msg) {
    document.getElementById("content").innerText = msg;
    document.getElementById("desc").innerText = "Fansly.com Device Id";
  }
});