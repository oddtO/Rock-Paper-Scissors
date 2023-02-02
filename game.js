const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const LOOKUP_ROCK_PAPER_SCISSORS = [ROCK, PAPER, SCISSORS];




function playRound(playerSelection, computerSelection)
{


    playerSelectionNormalized = normalizeInput(playerSelection);


    if(playerSelectionNormalized == computerSelection)
    {
        return {resultString: `Draw! ${playerSelectionNormalized} vs ${computerSelection}`, hasWon: null};
    }

    

    const WON = 'You won!';
    const LOST = 'You lost';

    let outcome = {};

    if (playerSelectionNormalized == ROCK && computerSelection == PAPER ||
        playerSelectionNormalized == PAPER && computerSelection == SCISSORS ||
        playerSelectionNormalized == SCISSORS && computerSelection == ROCK)
        {
            outcome = {resultString: concatOutcomeString(LOST, computerSelection, playerSelectionNormalized), hasWon: false};
        }
    else if (
        playerSelectionNormalized == ROCK && computerSelection == SCISSORS ||
        playerSelectionNormalized == PAPER && computerSelection == ROCK ||
        playerSelectionNormalized == SCISSORS && computerSelection == PAPER)
            outcome = {resultString: concatOutcomeString(WON, playerSelectionNormalized, computerSelection), hasWon: true};
    else
        outcome = {resultString: 'invalid player input', hasWon: null};
    

    return outcome;


    function normalizeInput(playerSelection)
    {
        return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    }

    function concatOutcomeString(ifwon, selectionWinner, selectionLoser)
    {
        return `${ifwon} ${selectionWinner} beats ${selectionLoser}`;
    }


}




function getComputerChoice()
{
    return LOOKUP_ROCK_PAPER_SCISSORS[getRandNumberInRange(0, LOOKUP_ROCK_PAPER_SCISSORS.length)];


    function getRandNumberInRange(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }


}




function startRound()
{
    let playerChoice = prompt('Enter rock, paper, or scissors');
    let computerChoice = getComputerChoice();


    let outcome = playRound(playerChoice, computerChoice);
    console.log('\n' + outcome.resultString);
    

    return outcome.hasWon;
}


function game()
{

    const Score_REQUIRED = 5;
    console.log(`first to win ${Score_REQUIRED} times is the ultimate winner`);

    let playerScore = 0;
    let computerScore = 0;



    while(playerScore < Score_REQUIRED && computerScore < Score_REQUIRED)
    {
        switch (startRound())
        {
            case null:
                break;
            case true:
                ++playerScore;
                break;
            case false:
                ++computerScore;
                break;
        }

        console.log(`Player/Computer Score: ${playerScore} : ${computerScore}`);
    }

    console.log((playerScore > computerScore ? "Player" : "Computer") + " wins!");
}


game();