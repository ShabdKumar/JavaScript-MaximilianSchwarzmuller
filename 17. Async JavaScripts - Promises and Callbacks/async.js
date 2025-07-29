const trackButton = document.querySelector("button");

function setTimer1(duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
}

function getPosition() {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (posdata) => {
        resolve(posdata);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
}

async function trackMe() {
  let data;
  let posdata;
  try {
    posdata = await getPosition();
    data = await setTimer1(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(data, posdata);
}
trackButton.addEventListener("click", trackMe);

Promise.race([getPosition(), setTimer1(1000)]).then((data) =>
  console.log(data)
);
Promise.all([getPosition(), setTimer1(1000)]).then((data) => console.log(data));
Promise.allSettled([getPosition(), setTimer1(1000)]).then((data) =>
  console.log(data)
);
