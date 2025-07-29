const trackMeButton = document.querySelector("button");

// /* -----------------Event Loop------------------*/

function greet() {
  console.log("Hello");
}
function showAlert() {
  alert("Alert");
}
setTimeout(showAlert, 1000); // showAlert will execute after all normal programs finished execution
greet();

let result = 0;
for (let i = 0; i < 1000000000; i++) {
  result += i;
}
console.log(result);

function getGeolocation() {
  navigator.geolocation.getCurrentPosition(
    (posData) => console.log(posData),
    (error) => console.log(error)
  );
  console.log("Getting Position..."); // geo location will always print result after this console.log
}
trackMeButton.addEventListener("click", getGeolocation);

/*          Promise            */

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
};

const getLocation = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (posData) => {
        resolve(posData);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

function trackUser() {
  // navigator.geolocation.getCurrentPosition(
  //   (posdata) => {
  //     setTimer(2000).then((data) => console.log(data, posdata));
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  let positionData;
  getLocation()
    .then(
      (posData) => {
        positionData = posData;
        return setTimer(2000);
      }
      //, (error) => {
      //   console.log(error);
      //   return "on the way to go..";
      // }
    )
    // .catch((error) => {
    //   console.log(error);
    //   return setTimer(2000);
    // })
    .then((data) => {
      console.log(data, positionData);
    })
    .catch((error) => console.log(error));

  console.log("Getting Position...");
}

trackMeButton.addEventListener("click", trackUser);
