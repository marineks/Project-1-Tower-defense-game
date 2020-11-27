

/// Linked to interlude page


const gameRules = function () {
    //initialization of the scores to zero
    let playerScore = 0;
    let computerScore = 0;


    function startTheGame () {
        const startBtn = document.querySelector(".context button");
        const contextDiv = document.querySelector(".context");
        const match = document.querySelector(".match");

        //doing the transitions from the context div to the actual game
        startBtn.addEventListener("click", ( function () {
            contextDiv.classList.add("transition");
            match.classList.add("transitionIn");
            // ici rajouter musique d'ascenseur
        }));
    };   

    function playGame () {
        // fetch the elements
        const options = document.querySelectorAll(".options button");
        const playerChoice = document.querySelector(".player-choice");
        const computerChoice = document.querySelector(".computer-choice");
        const choices = document.querySelectorAll(".choices img");
   
    // listener
    choices.forEach(hand => {
        hand.addEventListener("animationend", function () {
            this.style.animation = "";
        });
    });
    // main de l'ordi
    const compOptions = ["rock", "paper", "scissors"];

    options.forEach(placeholder => {
        placeholder.addEventListener("click", function () {
            // randomize a number 
            const randomNumber = Math.floor(Math.random() * 3);
            // assign that number to the computer choice
            const computerOptions = compOptions[randomNumber];

            // I only want the imgs to show the result after they move so setTimeOut
            setTimeout(() => {
                compareChoices(this.textContent, computerOptions);
             
                playerChoice.src = `./0-images/${this.textContent}.png`;
                
                // computerChoice.src = `/0-images/${computerOptions}.png;`

                if (computerOptions === "rock") {
                  computerChoice.src = "./0-images/rock.png";
                } else if (computerOptions === "scissors") {
                  computerChoice.src = "./0-images/scissors.png";
                } else {
                  computerChoice.src = "./0-images/paper.png";
                }
            }, 2500);

            playerChoice.style.animation = "movePlayer 2.5s ease";
            computerChoice.style.animation = "moveComputer 2.5s ease";
        });
    });
 };

function updateScore () {
    const scorePlayer = document.querySelector(".player-score p");
    const scoreComputer = document.querySelector(".computer-score p");
    //console.log(scorePlayer);
    //console.log("score comp", scoreComputer);
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
};

function compareChoices (playerChoice, computerOptions) {
    const winner = document.querySelector(".win");
    if (playerChoice === computerOptions) {
        winner.textContent = "Tie! Let's do it again!";
        return;
    }
    // if the player picks rock
    if (playerChoice === "rock") {
        if (computerOptions === "scissors") {
          winner.textContent = "You won! Congrats, you beat the IA!";
          playerScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You lost. Well you can always try again!";
          computerScore++;
          updateScore();
          return;
        }
      }
      //If the player picks Paper
      if (playerChoice === "paper") {
        if (computerOptions === "scissors") {
          winner.textContent = "You lost. Well you can always try again!";
          computerScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You won! Congrats, you beat the IA!";
          playerScore++;
          updateScore();
          return;
        }
      }
      //If the player picks Scissors
      if (playerChoice === "scissors") {
        if (computerOptions === "rock") {
          winner.textContent = "You lost. Well you can always try again!";
          computerScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "You won! Congrats, you beat the IA!";
          playerScore++;
          updateScore();
          return;
        }
      }
    };

// FUNCTIONS TO CALL
startTheGame();
playGame();


}

gameRules();

// TOWER WITH A TWIST FEATURE
const glitch = document.querySelector('.glitchou');
const doomText = document.querySelector('.dooms-text');

setTimeout(function appearGlitch() {
   glitch.classList.add('appears'); 

}, 15000);

setTimeout(function appearGlitch() {
   doomText.classList.add('transition-in');

}, 18000);

