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
            console.log(computerSelection, playerSelection);

            while (gameCount < 6){
                if (playerSelection === 'rock'){
                    if (computerSelection === 'paper'){
                        computerScore.textContent = Number(computerScore.textContent) + 1;
                        return "You Lose! Paper beats Rock"
                    }else if (computerSelection === 'scissors'){
                        winCount++;
                        playerScore.textContent = Number(playerScore.textContent) + 1;
                        return "You win! Rock beats Scissors"
                    }else{
                        return "It's a tie!"
                    }
                }
    
                if (playerSelection === 'paper'){
                    if (computerSelection === 'rock'){
                        winCount++;
                        playerScore.textContent = Number(playerScore.textContent) + 1;
                        return "You Win! Paper beats Rock"
                    }else if (computerSelection === 'scissors'){
                        computerScore.textContent = Number(computerScore.textContent) + 1;
                        return "You Lose! Scissors beats Paper"
                    }else{
                        return "It's a tie!"
                    }
                }
    
                if (playerSelection === 'scissors'){
                    if (computerSelection === 'rock'){
                        computerScore.textContent = Number(computerScore.textContent) + 1;
                        return "You Lose! Rock beats Scissors"
                    }else if (computerSelection === 'paper'){
                        winCount++;
                        playerScore.textContent = Number(playerScore.textContent) + 1;
                        return "You Win! Scissors beats Paper"
                    }else{
                        return "It's a tie!"
                    }
                }
            }
            /* display end game message */
            if (winCount >2){
                message.textContent = "Congratulations, You Won!!!";
            }else if (winCount == 2){
                message.textContent = "Wow, Close game - It's a tie!";
            } else{
                message.textContent = "Sorry, You lost!";
            }
        }

        //adding listeners to options
        //define player selection
        rockButton.addEventListener('click', function(){
            playerSelection = 'rock';
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log(gameCount++);
        })

            paperButton.addEventListener('click', function(){
            playerSelection = 'paper';
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log(gameCount++);
        })

            scissorsButton.addEventListener('click', function(){
            playerSelection = 'scissors';
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log(gameCount++);
        })

/*         //game function
        function game(){

            if (gameCount === 5){
                console.log(`You won ${winCount} games out of five!`);

                
            }
        } */