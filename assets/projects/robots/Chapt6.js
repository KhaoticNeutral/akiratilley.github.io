//Chapter 6 & 7 are combined in this chapter


var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var leftArm = document.getElementById("mouth");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
mouth.addEventListener("click", moveLeftRight);


function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var animation = setInterval(frame, 100) // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";    
    top++;
    if (top == 20){
      clearInterval(animation);
    }
  }
  
}


function moveUpDown(e) {
var robotPart = e.target;
var top = 0;
var id = setInterval(frame, 10) // draw every 10ms
function frame() {
 robotPart.style.top = top + '%';
 top++;
if (top === 20){
clearInterval(id);
}
 }
 }

function moveRightLeft(e) {
 var robotPart = e.target;
 var left = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.left = left + '%';
 left++;
if (left === 70){
 clearInterval(id);
 }
 }
 }

 function moveLeftRight(e) {
 var robotPart = e.target;
 var right = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.right = right + '%';
 right++;
if (right === 70){
 clearInterval(id);
 }
 }
 }