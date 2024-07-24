console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('You do not know how to play fuck off.');
  }
}

const getComputerChoice = () => {
  const choice = Math.floor(Math.random()*2);
  if(choice === 0){
    return 'rock';
  } else if( choice === 1){
    return 'paper';
  } else if(choice === 2){
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'Tie';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'CPU';
    } else {
      return 'P';
    }
  }

    if(userChoice === 'paper'){
    if(computerChoice === 'scissors' || computerChoice === 'rock'){
      return 'CPU';
    } else {
      return 'P';
    }
  }

    if(userChoice === 'scissors'){
    if(computerChoice === 'paper' || computerChoice === 'rock'){
      return 'CPU';
    } else {
      return 'P';
    }
  }

  if(userChoice === 'bomb'){
      return 'P';
  }
}

const playGame = (userChoice, computerChoice) => {
  computerChoice = getComputerChoice();
  userChoice = getUserChoice('BOMB');
  console.log(`User: ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

//
//console.log(getUserChoice('rock'));