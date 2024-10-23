// script loader

console.log("script 1 loaded successfully");

async function scriptLoader(path) {

      const script2 = document.createElement("script");
      script2.src = path;
      document.body.appendChild(script2);
      script2.onload = ()=>{
         return true;
      };
}

async function allScriptLoader() {
  await scriptLoader("./script2.js")
  await scriptLoader("./script3.js")
  await scriptLoader("./script4.js")
  
}

allScriptLoader()