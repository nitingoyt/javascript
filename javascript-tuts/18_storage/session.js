// use of session storage

sessionStorage.setItem('sessionId', 'abc123');

let sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); 

sessionStorage.removeItem('sessionId');

sessionStorage.clear();

