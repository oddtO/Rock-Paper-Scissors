const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";


function normalizeInput(playerSelection)
{
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

}

function concatOutcomeString(ifwon, selectionWinner, selectionLoser)
{
    return `${ifwon} ${selectionWinner} beats ${selectionLoser}`;
}




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


}


console.log(playRound('rock', PAPER));
console.log(playRound('paper', SCISSORS));
console.log(playRound('SCIssors', ROCK));


console.log(playRound('SCIssOrs', PAPER));
console.log(playRound('rOcK', SCISSORS));
console.log(playRound('PaPER', ROCK));


console.log(playRound('PaPER', ROCK));
console.log(playRound('Rock', ROCK));