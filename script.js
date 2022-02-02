const boxes = Array.from(document.getElementsByClassName('box'));
const playerText = document.getElementById('won');
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = "O";
const player2 = "X";
var currentPlayer = player1;
const restartBtn = document.getElementById("restartBtn");
var winO = 0;
var winX = 0;


const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = '';
    if (index < 3) {
      styleString += 'border-bottom: 3px solid var(--blue);';
    }
    if (index % 3 == 0) {
      styleString += 'border-right: 3px solid var(--blue);';
    }
    if (index % 3 == 2) {
      styleString += 'border-left: 3px solid var(--blue);';
    }
    if (index > 5) {
      styleString += 'border-top: 3px solid var(--blue);';
    }
    box.style = styleString;
    playerText.innerHTML = "Player O's turn";
    box.addEventListener('click', boxClicked);

  });
};
const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id] && !playerHasWon()) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerHasWon()) {
      playerText.innerText = currentPlayer + " has won!";
      if(currentPlayer == player1){
        winO++;
        document.getElementById('textO').insertAdjacentHTML('afterbegin', "Win-Counter: " + winO + "<br> <br>");
      } else{
        winX++;
        document.getElementById('textX').insertAdjacentHTML('afterbegin', "Win-Counter: " + winX + "<br> <br>");
      }
      return;
    } else if (currentPlayer == player1) {
      playerText.innerHTML = "Player X's turn";
      currentPlayer = player2;
    } else {
      playerText.innerHTML = "Player O's turn";
      currentPlayer = player1;
    }
  }
};
console.log(spaces);


const playerHasWon = () => {
  if(spaces[2] == currentPlayer){
    if(spaces[4] == currentPlayer && spaces[6] == currentPlayer){
      return true;
    }
  }
  if (spaces[0] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
      return true;
    }
    if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
      return true;
    }
  } else if (spaces[8] == currentPlayer) {
    if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
      return true;
    }
    if (spaces[6] == currentPlayer && spaces[7] == currentPlayer) {
      return true;
    }
  } else if (spaces[4] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[5] == currentPlayer) {
      return true;
    }
    if (spaces[2] == currentPlayer && spaces[6] == currentPlayer) {
      return true;
    } else if (spaces[6] == currentPlayer) {
      if (spaces[2] == currentPlayer && spaces[4] == currentPlayer) {
        return true;
      }
    }
  }
}

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playerText.innerHTML = "Player O's turn";

  currentPlayer = player1;
});


drawBoard();
