        let screenName = document.querySelector(".player-name");
        let options = ['Rock', 'Paper', 'Scissors'];
        let gameCount = 0;
        let winCount = 0;
        let playerSelection;
        let playButton = document.querySelector(".play");
        const rockButton = document.querySelector(".rock")
        const paperButton = document.querySelector(".paper")
        const scissorsButton = document.querySelector(".scissors")
        let playerScore = Number(document.querySelector(".player-score").textContent);
        let computerScore = Number(document.querySelector(".computer-score").textContent);



        playButton.addEventListener('click', function(){
            let playerName = prompt("What is your name? ", "Player");
            /* assign names */
            screenName.textContent = playerName;
            game();
        })

        //define player selection
        rockButton.addEventListener('click', function(){
            playerSelection = 'rock';
        })

        paperButton.addEventListener('click', function(){
            playerSelection = 'paper';
        })

        scissorsButton.addEventListener('click', function(){
            playerSelection = 'scissors';
        })


        //define computer selection
        function computerPlay(){
            return options[Math.floor(Math.random()*options.length)];
        }

        //function to validate winners/losers
        function playRound(playerSelection, computerSelection){

            console.log(playerSelection, computerSelection);

            if (playerSelection.toLowerCase() === 'rock'){
                if (computerSelection.toLowerCase() === 'paper'){
                    computerScore++;
                    return "You Lose! Paper beats Rock"
                }else if (computerSelection.toLowerCase() === 'scissors'){
                    winCount++;
                    playerScore++;
                    return "You win! Rock beats Scissors"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection.toLowerCase() === 'paper'){
                if (computerSelection.toLowerCase() === 'rock'){
                    winCount++;
                    playerScore++;
                    return "You Win! Paper beats Rock"
                }else if (computerSelection.toLowerCase() === 'scissors'){
                    computerScore++;
                    return "You Lose! Scissors beats Paper"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection.toLowerCase() === 'scissors'){
                if (computerSelection.toLowerCase() === 'rock'){
                    computerScore++;
                    return "You Lose! Rock beats Scissors"
                }else if (computerSelection.toLowerCase() === 'paper'){
                    winCount++;
                    playerScore++;
                    return "You Win! Scissors beats Paper"
                }else{
                    return "It's a tie!"
                }
            }
        }

        //game function
        function game(){
            while(gameCount < 5){
                console.log(playRound(playerSelection, computerPlay()));
                gameCount++;
            } 
            console.log(`You won ${winCount} games out of five!`);
            if (winCount >2){
                console.log("You are the victor!");
            }else{
                console.log("You lost :( try again");
            }
        }