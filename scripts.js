        let playerName = prompt("What is your name? ", "Player");
        let screenName = document.querySelector(".player-name");
        let options = ['Rock', 'Paper', 'Scissors'];
        let gameCount = 0;
        let winCount = 0;

        /* assign names */
        screenName.textContent = playerName;
        /* to start the game when the browser opens */
        // game();
        


        //function to generate items
        function computerPlay(){
            return options[Math.floor(Math.random()*options.length)];
        }

        //function to validate winners/losers
        function playRound(playerSelection, computerSelection){

            console.log(playerSelection, computerSelection);

            if (playerSelection.toLowerCase() === 'rock'){
                if (computerSelection.toLowerCase() === 'paper'){
                    return "You Lose! Paper beats Rock"
                }else if (computerSelection.toLowerCase() === 'scissors'){
                    winCount++;
                    return "You win! Rock beats Scissors"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection.toLowerCase() === 'paper'){
                if (computerSelection.toLowerCase() === 'rock'){
                    winCount++;
                    return "You Win! Paper beats Rock"
                }else if (computerSelection.toLowerCase() === 'scissors'){
                    return "You Lose! Scissors beats Paper"
                }else{
                    return "It's a tie!"
                }
            }

            if (playerSelection.toLowerCase() === 'scissors'){
                if (computerSelection.toLowerCase() === 'rock'){
                    return "You Lose! Rock beats Scissors"
                }else if (computerSelection.toLowerCase() === 'paper'){
                    winCount++;
                    return "You Win! Scissors beats Paper"
                }else{
                    return "It's a tie!"
                }
            }
        }

        //game function
        function game(){
            while(gameCount < 5){
                console.log(playRound(prompt("what would you like to play? "), computerPlay()));
                gameCount++;
            } 
            console.log(`You won ${winCount} games out of five!`);
            if (winCount >2){
                console.log("You are the victor!");
            }else{
                console.log("You lost :( try again");
            }
        }