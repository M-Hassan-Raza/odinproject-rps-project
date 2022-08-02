function getComputerChoice() {
    let generatedNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (generatedNumber === 0) {
        computerChoice = "rock";
    }

    if (generatedNumber === 1) {
        computerChoice = "paper";
    }

    if (generatedNumber === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;

}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result = "";

    if (player == computerSelection) {
        result = "Draw! Player and Computer both chose " + player;
    }
    else {
        if (player == "rock" && computerSelection == "paper") {
            result = "You Lose! " + computerSelection + " beats " + player;
        }

        if (player == "rock" && computerSelection == "scissors") {
            result = "You Win! " + player + " beats " + computerSelection;
        }

        if (player == "paper" && computerSelection == "rock") {
            result = "You Win! " + player + " beats " + computerSelection;
        }

        if (player == "paper" && computerSelection == "scissors") {
            result = "You Lose! " + computerSelection + " beats " + player;
        }

        if (player == "scissors" && computerSelection == "rock") {
            result = "You Lose! " + computerSelection + " beats " + player;
        }

        if (player == "scissors" && computerSelection == "paper") {
            result = "You Win! " + player + " beats " + computerSelection;
        }

    }

    return result;
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        let player = prompt("Enter Rock, Paper, or Scissors");
        player = player.toLowerCase();


        if (player == "rock" || player == "paper" || player == "scissors") {
            let result = playRound(player, computer);
            console.log(result);

            if (result.indexOf("Win") != -1) {
                playerCounter++;
            }
            else if (result.indexOf("Lose") != -1) {
                computerCounter++;
            }
        }
        else {
            alert("Invalid Input!");
        }
    }

    if (playerCounter > computerCounter) {
        console.log("You Won the match with a score of " + playerCounter + " against " + computerCounter);
    }
    else if (playerCounter < computerCounter) {
        console.log("You Lost the match with a score of " + playerCounter + " against " + computerCounter);
    }
    else {
        console.log("The Match was a draw! Both You and the computer scored" + playerCounter + " points!");
    }

}

game();