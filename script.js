function getComputerChoice() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  const lcPlayerSelection = playerSelection.trim().toLowerCase();
  const lcComputerSelection = computerSelection.trim().toLowerCase();

  const capPlayerSelection = capitalizeString(lcPlayerSelection);
  const capComputerSelection = capitalizeString(lcComputerSelection);

  switch (true) {
    case lcPlayerSelection === 'rock' && lcComputerSelection === 'scissors':
    case lcPlayerSelection === 'scissors' && lcComputerSelection === 'paper':
    case lcPlayerSelection === 'paper' && lcComputerSelection === 'rock':
      return `You Win! ${capPlayerSelection} ${
        lcPlayerSelection === 'scissors' ? 'beat' : 'beats'
      } ${capComputerSelection}.`;
    case lcPlayerSelection === 'scissors' && lcComputerSelection === 'rock':
    case lcPlayerSelection === 'paper' && lcComputerSelection === 'scissors':
    case lcPlayerSelection === 'rock' && lcComputerSelection === 'paper':
      return `You Lose! ${capComputerSelection} ${
        lcComputerSelection === 'scissors' ? 'beat' : 'beats'
      } ${capPlayerSelection}.`;
    default:
      return `Tie! ${capPlayerSelection} ${
        lcPlayerSelection === 'scissors' ? "don't" : "doesn't"
      } beat ${capComputerSelection}.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll('button');
  const score = document.querySelector('.score');
  const outputDiv = document.querySelector('.output');

  buttons.forEach((button) => {
    button.addEventListener('click', (button) => {
      const selectedElementID = button.target.id;
      const output = playRound(selectedElementID, getComputerChoice());

      switch (true) {
        case output.startsWith('You Win!'):
          playerScore += 1;
          break;
        case output.startsWith('You Lose!'):
          computerScore += 1;
          break;
        default:
          break;
      }

      if (playerScore === 5) {
        score.textContent = 'You Won!';
        score.style.backgroundColor = 'rgb(167, 255, 164)';

        outputDiv.textContent = output;
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        score.textContent = 'You lost!';
        score.style.backgroundColor = 'rgb(255, 148, 148)';

        outputDiv.textContent = output;
        playerScore = 0;
        computerScore = 0;
      } else {
        score.textContent = `${playerScore} : ${computerScore}`;
        outputDiv.textContent = output;
        score.style.backgroundColor = '';
      }
    });
  });
}

game();
