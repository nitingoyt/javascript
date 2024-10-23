// script loader

console.log("script 1 loaded successfully");

function scriptLoader(path) {
    return new Promise((resolve, reject) => {
      const script2 = document.createElement("script");
      script2.src = path;
      document.body.appendChild(script2);
      script2.onload = resolve;
      script2.onerror = reject;
    });
  }

scriptLoader("./script2.js")
  .then(() => {
    console.log("Script 2 loading done");
    scriptLoader("./script3.js")
  .then(() => {
    console.log("Script 3 loading done");
  })
  .catch((err) => {
  });
  })
  .catch((err) => {
    // console.log("error is here");
  });
