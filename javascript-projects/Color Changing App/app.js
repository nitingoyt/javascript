// //Select 7 colors
// let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];



// //change the background of canvas when button is clicked
// let button = document.getElementById('button');

// button.addEventListener('click', function(){
//     //select a random number between 0 - 6
//     let index = parseInt((Math.random()*colors.length)+1);
//     //grab the canvas
//     let canvas = document.getElementById('canvas');

//     canvas.style.background = `${colors[index]}`
// })

let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow', 'cyan', 'brown', 'pink'];

let pressButton = document.getElementById("button")

pressButton.addEventListener("click", Changecolor = ()=>{

    let Colorindex = parseInt((Math.random()* colors.length) + 1);
    console.log(Colorindex);

    let reactangle = document.getElementById("canvas")

    reactangle.style.background = `${colors[Colorindex]}`

})

// console.log(Math.random())
