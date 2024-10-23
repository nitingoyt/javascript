// promise

console.log("execution Starts");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let index = 0;
    for (index = 0; index < 1000; index++) {}
    resolve(index);
  }, 500);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("error");
  });

console.log("Execution End");
