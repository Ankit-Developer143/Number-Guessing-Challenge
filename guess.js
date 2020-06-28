var y = Math.floor(Math.random() * 10 + 1);
var btn = document.getElementById("submitguess");
var guess = 1;
btn.onclick = function () {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + "Guess")
    }
    else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else if (x < y) {
        guess++;
        alert("OOPS SORRY!! TRY A Bigger NUMBER")
    }
    else {
        guess++;
        alert("You Entered Wrong Choice");
    }
    document.getElementById("result").innerHTML = ("Number of Guesses:" + guess);
    document.getElementById("guessField").value = "";





}




















