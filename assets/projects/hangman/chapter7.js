let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "cheesecake",
    "blue",
    "answer",
    "problem",
    "victory",
    "stan",
    "hebrew",
    "staked",
    "queen",
    "aware",
    "debord",
    "suited",
    "shed"
]

let word = words[Math.floor(Math.random()*words.length)];

let answerArray = [];
for (let i = 0; i < word.length;i++){
    answerArray[i]="_";
}

let remainingLetters = word.length;

let guess;
let attempts = word.length * 2;

while (remainingLetters > 0) {
    alert("Your Progress: " + answerArray.join(" "))
    alert ("you have " + attempts + " left")
    guess = prompt ("Please enter a single letter, or click cancel to exit");
    
    if (guess === null){
        break;
    }else if (guess.length > 1) {
        alert ("ONLY ONE LETTER LISTEN");
    }else{
        guess = guess.toLowerCase();
        attempts--;
        for(let j = 0; j< word.length; j++) {
            if (word[j] === guess){
                if (answerArray [j] === "_"){
                answerArray [j] = guess;
                remainingLetters--;
            }else{
                alert("You've already guessed this");
                break;
            }
            }
        }

    }
}

/*var attempts = 0;
while (attempts < 7) {
    alert ("You are out of tries, the word was " + word);
}*/

if (guess === null) {
    alert ("sorry you couldn't get it, the answer was " + word);
} else if (remainingLetters === 0){
    alert (answerArray.join(" "));
    alert ("Good job the answer was " + word);
}else{ (attempts === 0)   
 alert ("Fresh out of luck");

}