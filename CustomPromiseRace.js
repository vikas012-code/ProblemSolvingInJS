const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
    // reject("p1 rejected");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});


Promise.customRace = function (arr) {
    if(arr.length<1){
    return "empty <array> is not allowed"
  }
  
  return new Promise(function (resolve, reject) {

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
         resolve(value)
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};


console.log("Custom Promise Race \n")
const myResult = Promise.customRace([p1, p2, p3]);
myResult
  .then((value) => console.log("then ",value))
  .catch((error) => console.log("error ",error));