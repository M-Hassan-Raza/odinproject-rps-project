let playerCounter = 0;
let computerCounter = 0;

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

function playRound(player, computerSelection) {
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




const rock = document.getElementById("btnRock");
const paper = document.getElementById("btnPaper");
const scissors = document.getElementById("btnScissors");

if (rock) {
    rock.addEventListener('click', () => {
        let computer = getComputerChoice();
        let result = playRound('rock', computer);

        if (result.indexOf("Win") != -1) {
            playerCounter++;
        }
        else if (result.indexOf("Lose") != -1) {
            computerCounter++;
        }

        document.getElementById('player-label').innerText = playerCounter;
        document.getElementById('computer-label').innerText = computerCounter;


        if (playerCounter == 5) {
            let announcement = "You Won the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
        else if (computerCounter == 5) {
            let announcement = "You Lost the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
    });
}

if (paper) {
    paper.addEventListener("click", () => {
        let computer = getComputerChoice();
        let result = playRound('paper', computer);

        if (result.indexOf("Win") != -1) {
            playerCounter++;
        }
        else if (result.indexOf("Lose") != -1) {
            computerCounter++;
        }

        document.getElementById('player-label').innerText = playerCounter;
        document.getElementById('computer-label').innerText = computerCounter;

        if (playerCounter == 5) {
            let announcement = "You Won the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
        else if (computerCounter == 5) {
            let announcement = "You Lost the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
    });
}

if (scissors) {

    scissors.addEventListener("click", () => {
        let computer = getComputerChoice();
        let result = playRound('scissors', computer);

        if (result.indexOf("Win") != -1) {
            playerCounter++;
        }
        else if (result.indexOf("Lose") != -1) {
            computerCounter++;
        }

        document.getElementById('player-label').innerText = playerCounter;
        document.getElementById('computer-label').innerText = computerCounter;

        if (playerCounter == 5) {
            let announcement = "You Won the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
        else if (computerCounter == 5) {
            let announcement = "You Lost the match with a score of " + playerCounter + " against " + computerCounter;
            confirm(announcement);
            document.getElementById('player-label').innerText = 0;
            document.getElementById('computer-label').innerText = 0;
            playerCounter = 0;
            computerCounter = 0;
        }
    });
}