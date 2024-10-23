var deviceId;
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    if (details.requestBody && details.requestBody.raw && details.requestBody.raw.length > 0) {
      const buf = details.requestBody.raw[0].bytes;
      const decoder = new TextDecoder();
      const str = decoder.decode(buf);
      let data = JSON.parse(str);
      deviceId = data.deviceId
    }
  },
  { urls: ["https://apiv3.fansly.com/api/v1/login?ngsw-bypass=true"] },
  ["requestBody"]
);

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    // console.log("message recieved" + msg);
    port.postMessage(deviceId);
  });
})

