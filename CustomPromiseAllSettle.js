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

Promise.customAllSettle = function (arr) {
    if(arr.length<1){
    return "empty <array> is not allowed"
  }
  return new Promise(function (resolve,reject) {
    let result = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          result[i] = {status:"fullfilled",value:value};
          count++;

          if (count === arr.length) {
            resolve(result);
          }
        })
        .catch((value) => {
          result[i] = {status:"rejected",value:value};
          count++;

          if (count === arr.length) {
            resolve(result);
          }
        })}
  });
};

console.log("Custom Promise AllSettle \n")
const myResult = Promise.customAllSettle([p1, p2, p3]);
myResult
  .then((value) => console.log(value))
  .catch((error) => console.log(error));