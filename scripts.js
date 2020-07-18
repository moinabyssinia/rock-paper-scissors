        let screenName = document.querySelector(".player-name");
        let options = ['rock', 'paper', 'scissors'];
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

        //define computer selection
        function computerPlay(){
            return options[Math.floor(Math.random()*options.length)];
        }

        //function to validate winners/losers
        function playRound(playerSelection, computerSelection){

            console.log(playerSelection, computerSelection);

            if (playerSelection === 'rock'){
                if (computerSelection === 'paper'){
                    computerScore++;
                    return "You Lose! Paper beats Rock"
                }else if (computerSelection === 'scissors'){
                    winCount++;
                    playerScore++;
                    return "You win! Rock beats Scissors"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection === 'paper'){
                if (computerSelection === 'rock'){
                    winCount++;
                    playerScore++;
                    return "You Win! Paper beats Rock"
                }else if (computerSelection === 'scissors'){
                    computerScore++;
                    return "You Lose! Scissors beats Paper"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection === 'scissors'){
                if (computerSelection === 'rock'){
                    computerScore++;
                    return "You Lose! Rock beats Scissors"
                }else if (computerSelection === 'paper'){
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

            if (gameCount === 5){
                console.log(`You won ${winCount} games out of five!`);
                if (winCount >2){
                    console.log("You are the victor!");
                    return;
                }else{
                    console.log("You lost :( try again");
                    return;
                }
                
            }

        }