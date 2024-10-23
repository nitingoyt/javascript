// use of localstorage

localStorage.setItem("username", "JohnDoe");

let username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");

localStorage.clear();
