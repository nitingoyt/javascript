// const light = document.querySelector('#bulb');

// light.addEventListener('click', function(e){

//     e.target.classList.toggle('bulb-on');

// })


const bulb = document.querySelector('#bulb');
console.log(bulb);

bulb.addEventListener("click", function(e){
    console.log(e);
    e.target.classList.toggle('bulb-on')

});
