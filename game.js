


(function ()
{

    const ROCK = "Rock";
    const PAPER = "Paper";
    const SCISSORS = "Scissors";

    const LOOKUP_ROCK_PAPER_SCISSORS = [ROCK, PAPER, SCISSORS];

    const WINNING_SCORE = 5;



    function playRound(playerSelection, computerSelection)
    {



        if(playerSelection == computerSelection)
        {
            return {resultString: `Draw! ${playerSelection} vs ${computerSelection}`, hasWon: null};
        }

        

        const WON = 'You won!';
        const LOST = 'You lost';

        let outcome = {};

        if (playerSelection == ROCK && computerSelection == PAPER ||
            playerSelection == PAPER && computerSelection == SCISSORS ||
            playerSelection == SCISSORS && computerSelection == ROCK)
            {
                outcome = {resultString: concatOutcomeString(LOST, computerSelection, playerSelection), hasWon: false};
            }
        else if (
            playerSelection == ROCK && computerSelection == SCISSORS ||
            playerSelection == PAPER && computerSelection == ROCK ||
            playerSelection == SCISSORS && computerSelection == PAPER)
                outcome = {resultString: concatOutcomeString(WON, playerSelection, computerSelection), hasWon: true};
        else
            outcome = {resultString: 'invalid player input', hasWon: null};
        

        return outcome;

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




    let game = (function()
    {


        let playerScore = 0;
        let computerScore = 0;

        let lastOutcome = {resultString: '', hasWon: null};

        let playerScoreElement = document.querySelector('#playerScore');
        let computerScoreElement = document.querySelector('#computerScore');

        let choiceButtons = document.querySelector('#playerChoiceButtons');

        let choiceOutcomeElement = document.querySelector('#choiceOutcome');

        choiceButtons.addEventListener('click', start);

        function render()
        {


            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;

            choiceOutcomeElement.textContent = lastOutcome.resultString;

            switch(lastOutcome.hasWon)
            {
                
                case null:
                    choiceOutcomeElement.className = 'draw';
                    break;
                case true:
                    choiceOutcomeElement.className = 'won';
                    break;
                case false:
                    choiceOutcomeElement.className = 'lost';
                    break;
                
            }
                


        }


        function startRound(playerChoice)
        {
            let computerChoice = getComputerChoice();
    
            lastOutcome = playRound(playerChoice, computerChoice);
        
        }

        function isScoreBreached()
        {
            return playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE;
        }

        function start(event)
        {
            if(isScoreBreached())
            {
                playerScore = computerScore = 0;
            }
            startRound(event.target.dataset.choice);
            switch(lastOutcome.hasWon)
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

            if(isScoreBreached())
            {
                lastOutcome.resultString = (playerScore > computerScore ? "Player" : "Computer") + " wins!";
            }

            render();


            
        }
    })();



})();