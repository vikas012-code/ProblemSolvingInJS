const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
    // reject("p1 rejected");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
    // reject("p2 rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p3 resolved");
    reject("p3 rejected");
  }, 3000);
});

// const result=Promise.all([p1,p2,p3])

// result
// .then((res)=> console.log("res ",res))
// .catch((err)=> console.log("err ",err))






Promise.customAll = function (arr) {
  if(arr.length<1){
    return "empty <array> is not allowed"
  }

  return new Promise(function (resolve, reject) {
    let result = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((value) => {
          result[i] = value;
          count++;

          if (count === arr.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

console.log("Custom Promise All \n")
const myResult = Promise.customAll([p1, p2, p3]);
myResult
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
