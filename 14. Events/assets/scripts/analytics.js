const intervalAsnalytics = setInterval(() => {
  console.log("Sending Analytics Data...");
}, 2000);

document.querySelector("#stop-analytics").addEventListener("click", () => {
  clearInterval(intervalAsnalytics);
});
