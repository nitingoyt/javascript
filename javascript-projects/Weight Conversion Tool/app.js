// const form = document.querySelector('form');

// //add an event listener to the form

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const input = document.querySelector('input');
//     let results = document.querySelector('span');
//     let poundsToKG;

//     if ((input.value <= 0) || (isNaN(input.value))){
//         results.classList.add('error');
//         results.innerHTML = "<p>Please enter a value number!</p>"
//         setTimeout(function(){
//             results.innerHTML = '';
//             results.classList.remove('error');
//         }, 3000)
//         input.value = '';
//     } else {
//         poundsToKG = Number(input.value) / 2.2;
//         results.classList.add('no-error');
//         results.innerHTML = `${poundsToKG.toFixed(2)}`;
//         setTimeout(function(){
//             results.innerHTML = '';
//             input.value = '';
//             results.classList.remove('no-error');
//         }, 10000)

//     }
// })

const form = document.querySelector("form");
console.log(form);

// add event

form.addEventListener("submit", function(e){
    e.preventDefault();
    const input = document.querySelector("input");
    let results = document.querySelector("span");
    let poundToKG;

    if ((input.value <= 0) ){
        results.classList.add('error');
        results.innerHTML = '<p>Enter a valid number</p>';      
    }
    else {
        poundToKG = Number(input.value) / 2.2;
        results.classList.add('no-error');
        results.innerHTML = `${poundToKG}`;

    }
})

