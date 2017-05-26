  //variables
    var compChoice = ['a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z'];
    var userWin = 0;
    var userLoss = 0;
    var userChoice = document.getElementById("lettersUsed");
    var lettersUsed = [];
    var guesses  = 10;
    var rand = "";
  
    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      //creating a random letter for the computer choice
      //making the user guess the input
      var userGuess = event.key;

      if( guesses === 10) {
        var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        console.log("compGuess " + compGuess)
      }
    //+ win or + - guess
      if ( userGuess ===  compGuess) {
          userWin++;
          guesses = 10;
          lettersUsed = [];
          document.getElementById("userWin").innerHTML = userWin;


      }
      else {
        guesses--;
        document.getElementById("Guesses").innerHTML = guesses;
        lettersUsed.push(userGuess);
        document.getElementById("lettersUsed").innerHTML = lettersUsed;
        console.log(guesses);
        //sconsole.loguserChoice.push(lettersUsed);
        
      }
     
      
    

    //wrong cap
    if (guesses === 0){

      guesses = 10;
      lettersUsed = [];
      userLoss++;
      document.getElementById("userLoss").innerHTML = userLoss;
  
    }
          console.log('Loss' + userLoss);
            console.log("guesses" + guesses);
          console.log('Win'+ userWin);
          console.log("lettersUsed"+ lettersUsed);
          console.log("userGuess" + userGuess);

  }
    //if ( userWrong <=   )

    // correct answer input
  //   if(event.key != ('a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z')){
  //     alert("STOP MESSIN");
  //   }
  // }