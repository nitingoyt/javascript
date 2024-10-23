// callback function is passed as a argument in other function
// Arguments => Functions recieve
// Parameters => Passed to function

// Synchronous Operation

console.log("Start of Synchronous operation ");

function Synchronous() {
  //
  for (let i = 0; i < 109220; i++) {}
  console.log("Synchronous task completed");
}
Synchronous();

console.log("End of Synchronous operation");

// Asynchronous Operation

console.log("Start of Asynchronous operation");

function waterTask(cb) {
  console.time("waterTask");
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {}
  }, 0);
  console.log("Asynchronous task completed");
  console.timeEnd("waterTask");
  callback = true;
}

waterTask(trackWaterTask);

function trackWaterTask(value) {
  if (value) {
    console.log("water related task");
  }
}

console.log("End of Asynchronous operation");



function sum(a,b, cb){
    let x = a+b;
    cb(x)
};

function store(d){
    console.log(d);
};

sum(3,4, store)
