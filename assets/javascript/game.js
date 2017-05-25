  //variables
    var compChoice = ['a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z'];
    var userWin = 0;
    var userLoss = 0;
    var userChoice = document.getElementById("lettersUsed");
    var lettersUsed = [];
    var guesses=10;
    var rand = "";
  
    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      //creating a random letter for the computer choice
      var compGuess   = compChoice[Math.floor(Math.random() * compChoice.length)];
      //making the user guess the input
      var userGuess = event.key;


    //+ win or + - guess
      if ( userGuess ==  compGuess) {
          userWin++;
          console.log(guesses =10);
          console.log('Win');
   

      }
      else {
        console.log(--guesses);
        console.log("wrong");
        //sconsole.loguserChoice.push(lettersUsed);
        
      }
     
      
    

    //wrong cap
    if (guesses = 0){

      guesses = [];
      userLoss++;

      console.log('Loss');
    }
  }

  
    //if ( userWrong <=   )

    // correct answer input
  //   if(event.key != ('a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't' , 'u', 'v', 'w', 'x', 'y', 'z')){
  //     alert("STOP MESSIN");
  //   }
  // }