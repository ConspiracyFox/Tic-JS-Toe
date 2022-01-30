const boxes = Array.from(document.getElementsByClassName('box'));
const playerText = document.getElementById('playerText');
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = "O";
const player2 = "X";
var currentPlayer = player1;
let styleString = '';


const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = '';
    if(index < 3){
        styleString += 'border-bottom: 3px solid var(--green);';
    }
    if(index % 3 == 0){
        styleString += 'border-right: 3px solid var(--green);';
    }
    if(index % 3 == 2){
        styleString += 'border-left: 3px solid var(--green);';
    }
    if(index > 5){
        styleString += 'border-top: 3px solid var(--green);';
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked);
    });
};
const boxClicked = (e) =>{
  const id = e.target.id;
  if(playerHasWon()){
    playerText.innerText = "${currentPlayer} has won";
    return;
  }
  if(!spaces[id]){
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if(currentPlayer == player1){
      document.getElementById("turn").innerHTML = "X";
      currentPlayer = player2;
    }
    else{
      document.getElementById("turn").innerHTML = "O";
      currentPlayer = player1;
    }

  }
};
  console.log(spaces);


const playerHasWon = () => {
  if(spaces[0] == currentPlayer){
    if(spaces[1] == currentPlayer && spaces[2] == currentPlayer){
      console.log("fehler");
      document.getElementById("won").innerHTML = "Player " + currentPlayer + " has won!";
      return true;
    }
    if(spaces[4] == currentPlayer && spaces[8] == currentPlayer){
      console.log("fehler1");
      document.getElementById("won").innerHTML = "Player " + currentPlayer + " has won!";
      console.log(currentPlayer, 'wins.')
      return true;
    }
    if(spaces[3] == currentPlayer && spaces[6] == currentPlayer)
      console.log("fehler2");
      document.getElementById("won").innerHTML = "Player " + currentPlayer + " has won!";
      console.log(currentPlayer, 'wins.')
      return true;
  }
}
function restart(){
  location.reload(true);
}
drawBoard();
