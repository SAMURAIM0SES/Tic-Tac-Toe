
const playerX = "X";
const playerO = "O";
const boxes = document.querySelectorAll(".box");
const gameOver = document.getElementById("gameOver");
const gameOverText = document.getElementById("gameOverText");
const playAgain = document.getElementById("playAgain");
const playerXinput = document.getElementById("playerXinput")
const playerXlabel = document.getElementById("playerXlabel")
const playerOinput = document.getElementById("playerOinput")
const playerOlabel = document.getElementById("playerOlabel")
const playerXinputform = document.getElementById("playerXinputform")
const playerOinputform = document.getElementById("playerOinputform")

playerXinputform.addEventListener("submit", (event)=>{
event.preventDefault();
const playerXName = event.target[0]
playerXlabel.innerHTML = playerXName.value
})
playerOinputform.addEventListener("submit", (event)=>{
  event.preventDefault();
  const playerOName = event.target[0]
  playerOlabel.innerHTML = playerOName.value
  })


let turn = playerX;
let gameState = [null, null, null,
  null, null, null,
  null, null, null ]
restartGame()




function restartGame(){
  if(playAgain){ gameState = [null, null, null,
  null, null, null,
  null, null, null ]


  boxes.forEach((box)=>box.innerHTML="");
  boxes.forEach((box)=>box.removeEventListener("click", boxClick));
  boxes.forEach((box)=>box.addEventListener("click", boxClick));
  
 
  
  gameOver.className = "hidden";



}}






boxes.forEach((box)=>box.addEventListener("click", boxClick));



function boxClick(event){
  
  if(gameOver.classList.contains('visible')){
    return;
  }
  const box = event.target;
  const id = event.target.id
  if(box.innerText != ""){
    return;
  }
  if(turn === playerX){
    box.innerText = playerX;
    gameState[id - 1] = playerX;

    turn = playerO;
  }
  else{
    box.innerText = playerO;
   gameState[id - 1] = playerO;
   
    turn = playerX;
  }
  
  checkFTW();
}


function checkFTW(){
  if(gameState != [
    null, null, null,
    null, null, null,
  null, null, null
  ]){
  for(const winningCondition of winningConditions){
  const {combo} = winningCondition;
    const boxValue1 = gameState[combo[0] - 1];
    const boxValue2 = gameState[combo[1] - 1];
    const boxValue3 = gameState[combo[2] - 1];


    if(boxValue1 != null && boxValue1 === boxValue2 && boxValue1 === boxValue3){
      // lineThru.classList.push(lineThruClass);
      gameOverScreen(boxValue1);
      return;     
    }
  }
  const tieGame= (gameState != 
    null, null, null,
    null, null, null,
    null, null, null )
    }}


function gameOverScreen(winnerText){
  let text = "Cat's Game!";
  if (winnerText != null){
    text = `The winner is ${winnerText}!!`
  }
gameOver.className = "visible";
gameOverText.innerText = text;
}




const winningConditions  = [
  {combo:[1,2,3]},
  {combo:[4,5,6]},
  {combo:[7,8,9]},
  {combo:[1,4,7]},
  {combo:[2,5,8]},
  {combo:[3,6,9]},
  {combo:[1,5,9]},
  {combo:[3,5,7]},
]


playAgain.addEventListener("click", restartGame)

