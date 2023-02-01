const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const LOOKUP_ROCK_PAPER_SCISSORS = [ROCK, PAPER , SCISSORS];




function playRound(playerSelection, computerSelection)
{


    playerSelectionNormalized = normalizeInput(playerSelection);


    if(playerSelectionNormalized == computerSelection)
    {
        return `Draw! ${playerSelectionNormalized} vs ${computerSelection}`;
    }

    

    const WON = 'You won!';
    const LOST = 'You lost';

    if (playerSelectionNormalized == ROCK && computerSelection == PAPER ||
        playerSelectionNormalized == PAPER && computerSelection == SCISSORS ||
        playerSelectionNormalized == SCISSORS && computerSelection == ROCK)
            outcome = concatOutcomeString(LOST, computerSelection, playerSelectionNormalized);
    else if (
        playerSelectionNormalized == ROCK && computerSelection == SCISSORS ||
        playerSelectionNormalized == PAPER && computerSelection == ROCK ||
        playerSelectionNormalized == SCISSORS && computerSelection == PAPER)
            outcome = concatOutcomeString(WON, playerSelectionNormalized, computerSelection);
    else
        outcome = 'invalid player input';
    

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


console.log(playRound('rock', PAPER));
console.log(playRound('paper', SCISSORS));
console.log(playRound('SCIssors', ROCK));


console.log(playRound('SCIssOrs', PAPER));
console.log(playRound('rOcK', SCISSORS));
console.log(playRound('PaPER', ROCK));


console.log(playRound('PaER', ROCK));
console.log(playRound('Rock', ROCK));


for(let i = 0; i < 100; ++i)
    console.log(getComputerChoice());

