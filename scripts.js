        let screenName = document.querySelector(".player-name");
        let options = ['rock', 'paper', 'scissors'];
        let gameCount = 0;
        let winCount = 0;
        let playerSelection;
        let playButton = document.querySelector(".play");
        const rockButton = document.querySelector(".rock")
        const paperButton = document.querySelector(".paper")
        const scissorsButton = document.querySelector(".scissors")
        let playerScore = document.querySelector(".player-score");
        let computerScore = document.querySelector(".computer-score");
        let message = document.querySelector(".message");
        let gamesLeft = document.querySelector(".games-left");



        playButton.addEventListener('click', function(){
            let playerName = prompt("What is your name? ", "Player");
            /* assign names */
            screenName.textContent = playerName;
        })

        //define computer selection
        function computerPlay(){
            return options[Math.floor(Math.random()*options.length)];
        }

        //function to validate winners/losers
        function playRound(playerSelection, computerSelection){
            console.log(computerSelection, playerSelection, gameCount);

            if (playerSelection === 'rock'){
                if (computerSelection === 'paper'){
                    computerScore.textContent = Number(computerScore.textContent) + 1;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "Bummer! Paper beats Rock";
                }else if (computerSelection === 'scissors'){
                    winCount++;
                    playerScore.textContent = Number(playerScore.textContent) + 1;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "Yaay! Rock beats Scissors";
                }else if (computerSelection === 'rock'){
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "It's a tie!";
                }
            }

            if (playerSelection === 'paper'){
                if (computerSelection === 'rock'){
                    winCount++;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    playerScore.textContent = Number(playerScore.textContent) + 1;
                    message.textContent = "Yaay! Paper beats Rock";
                }else if (computerSelection === 'scissors'){
                    computerScore.textContent = Number(computerScore.textContent) + 1;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "Bummer! Scissors beat Paper";
                }else{
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "It's a tie!";
                }
            }

            if (playerSelection === 'scissors'){
                if (computerSelection === 'rock'){
                    computerScore.textContent = Number(computerScore.textContent) + 1;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "Bummer! Rock beats Scissors";
                }else if (computerSelection === 'paper'){
                    winCount++;
                    playerScore.textContent = Number(playerScore.textContent) + 1;
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "Yaay! Scissors beat Paper";
                }else{
                    gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                    message.textContent = "It's a tie!";
                }
            }
        }

        /* display end game message */
        function displayScore(){
            if (winCount >2){
                gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                message.textContent = "Congratulations, You Won!!!";
            }else if (winCount == 2){
                gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                message.textContent = "Wow, Close game - It's a tie!";
            } else{
                gamesLeft.textContent = `Games Left = ${5-gameCount}`;
                message.textContent = "Sorry, You lost!";
            }
        }

        //adding listeners to options
        //define player selection
        rockButton.addEventListener('click', function(){
            playerSelection = 'rock';
            gameCount++;
            computerSelection = computerPlay();
            if (gameCount < 5){
                playRound(playerSelection, computerSelection);    
            }else if (gameCount === 5){
                displayScore();
            }
        })

        paperButton.addEventListener('click', function(){
            playerSelection = 'paper';
            gameCount++;
            computerSelection = computerPlay();
            if (gameCount <= 5){
                playRound(playerSelection, computerSelection);    
            }else if (gameCount === 5){
                displayScore();
            }
        })

        scissorsButton.addEventListener('click', function(){
            playerSelection = 'scissors';
            gameCount++;
            computerSelection = computerPlay();
            if (gameCount <= 5){
                playRound(playerSelection, computerSelection);    
            }else if (gameCount === 5){
                displayScore();
            }
        })



