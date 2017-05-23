<!DOCTYPE js>
document.write("yooooo")
var compChoice = ['r', 'p', 's'];
    var userWin = 0;
    var userLoss = 0;
    var userTie = 0;
    var userChoice = document.getElementById("user-choice");
    var rand = "";
  
    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
      var userGuess = event.key;
    
      if ( userGuess == "r" && compGuess == "r") {
          console.log('Tie');
          document.getElementById("tieCount").innerHTML = userTie++;
      }
      else if (userGuess == "r" && compGuess== "s"){
        console.log('WIN');
        document.getElementById("winCount").innerHTML = userWin++;
      }
      else if (userGuess == "r" && compGuess== "p") {
        console.log("LOSS")
        document.getElementById("lossCount").innerHTML = userLoss++;
      }
      else  if ( userGuess == "s" && compGuess == "s") {
          console.log('Tie');
          document.getElementById("tieCount").innerHTML = userTie++;
        }
      else if (userGuess == "s" && compGuess== "p"){
        console.log('WIN');
        document.getElementById("winCount").innerHTML = userWin++;
      }
      else if (userGuess == "s" && compGuess== "r") {
        console.log("LOSS")
        document.getElementById("lossCount").innerHTML = userLoss++;
      }
      else if ( userGuess == "p" && compGuess == "p") {
          console.log('Tie');
          document.getElementById("tieCount").innerHTML = userTie++;
      }
      else if (userGuess == "p" && compGuess== "r"){
        console.log('WIN');
        document.getElementById("winCount").innerHTML = userWin++;
      }
      else if (userGuess == "p" && compGuess== "s") {
        console.log("LOSS")
        document.getElementById("lossCount").innerHTML = userLoss++;
      }
    };
    </js>