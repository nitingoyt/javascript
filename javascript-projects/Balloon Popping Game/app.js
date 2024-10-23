// let popped = 0;

// document.addEventListener('mouseover', function(e){

//     if (e.target.className === "balloon"){

//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){

//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };

// const targetDiv = document.getElementById("balloon-gallery");

// let removeEvent = false;

// targetDiv.addEventListener("mouseover", handleMouseOver);
// let balloonsCount = 24;

// function handleMouseOver(e) {
//   if (balloonsCount <= 0) {
//     if (!removeEvent) {
//       targetDiv.removeEventListener("mouseover", () => {
//         console.log("All Balloons Popped, Hurray");
//       });
//       removeEvent = true;
//       // alert("All Balloons Popped, Hurray")
//       console.log("All Balloons Popped, Hurray");
//     }
//   }

//   if (e.target.className == "balloon") {
//     e.target.classList.remove("balloon");
//     e.target.classList.add("popped");
//     balloonsCount--;
//   }
// }

const targetDiv = document.getElementById("balloon-gallery");

targetDiv.addEventListener("mouseover", MouseoverEvent);

let balloonCount = 24;
let removeEvent = false;

function MouseoverEvent(e) {
  if (balloonCount <= 0) {
    if (!removeEvent) {
      targetDiv.removeEventListener("mouseover", () => {
        console.log(" No More Balloons ");
      });
      removeEvent = true;
      console.log(" No More Balloon to Pop!!!!!! ");
    }
  }
  if (e.target.className == "balloon") {
    e.target.classList.remove("balloon");
    e.target.classList.add("popped");
    balloonCount--;
  }
}
