// document.cookie = "username=JohnDoe; expires=" + new Date(new Date().getTime() + 7*24*60*60*1000).toUTCString() + "; path=/";

// function getCookie(name) {
//     let value = "; " + document.cookie;
//     let parts = value.split("; " + name + "=");
//     if (parts.length == 2) return parts.pop().split(";").shift();
// }
// let username = getCookie('username');
// console.log(username);  

// document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";

let x = document.cookie;

console.log(x);