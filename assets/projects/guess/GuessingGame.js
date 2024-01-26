let secreteNum = Math.floor(Math.random()*20)+1;

let guess;
let attempts = 10;
//alert(secreteNum);
while (attempts > 0) {
    let answer = Number(prompt("Please guess the secrete number 1-20"))
    //guess = prompt ("Please enter a single Number, or click cancel to exit");
    
    if (guess === null){
        continue;
    }else if (answer > 20 || answer < 1) {
        alert ("Please pick a number between 1 and 20");
    }else{
        
    if (answer == secreteNum ){
        alert("Correct Guess!");
        break;
    }
    if (answer < secreteNum){
        alert("incorrect too low");
    }
    if (answer > secreteNum){
        alert("incorrect too high");
    }
    }
}
alert("Game End")

