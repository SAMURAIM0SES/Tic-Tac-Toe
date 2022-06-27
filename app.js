

    


const boxes = document.querySelectorAll(".box");
const playerX = "X";
const playerO = "O";
let turn = playerX;


 let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


const lineThru = document.getElementsByClassName("lineThru");
const gameOver = document.getElementById("gameOver");
const gameOverText = document.getElementById("gameOverText");
const playAgain = document.getElementById("playAgain");


boxes.forEach((box)=>box.addEventListener("click", boxClick));



function boxClick(event){
  if(gameOver.classList.contains('visible')){
    return;
  }
  const box = event.target;
  const boxNum = box.dataset.index;
  if(box.innerText != ""){
    return;
  }
  if(turn === playerX){
    box.innerText = playerX;
    gameState[boxNum - 1] = playerX;
    turn = playerO;
  }
  else{
    box.innerText = playerO;
    gameState[boxNum - 1] = playerO;
    turn = playerX;
  }
  
  checkFTW();
}


function checkFTW(){
  for(const winningCondition of winningConditions){
  const {combo, lineThruClass} = winningCondition;
    const boxValue1 = gameState[combo[0] - 1];
    const boxValue2 = gameState[combo[1] - 1];
    const boxValue3 = gameState[combo[2] - 1];


    if(boxValue1 != null && boxValue1 === boxValue2 && boxValue1 === boxValue3){
      lineThru.classList.add(lineThruClass);
      gameOverScreen(boxValue1);
      return;     
    }
  }
  const tieGame= (gameState != 
    [null, null, null],
    [null, null, null],
    [null, null, null] )
    }


function gameOverScreen(winnerText){
  let text = "Cat's Game!";
  if (winnerText != null){
    text = `The winner is ${winnerText}!!`
  }
gameOver.className = "visible";
gameOverText.innerText = text;
}




const winningConditions  = [
  {combo:[1,2,3], lineThruClass: "lineThruRow1"},
  {combo:[4,5,6], lineThruClass: "lineThruRow2"},
  {combo:[7,8,9], lineThruClass: "lineThruRow3"},
  {combo:[1,4,7], lineThruClass: "lineThruCol1"},
  {combo:[2,5,8], lineThruClass: "lineThruCol2"},
  {combo:[3,6,9], lineThruClass: "lineThruCol3"},
  {combo:[1,5,9], lineThruClass: "lineThruDiag1"},
  {combo:[3,5,7], lineThruClass: "lineThruDiag2"},
]


