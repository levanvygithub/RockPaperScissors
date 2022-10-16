const competitorChoiceDisplay = document.getElementById('competitor-choice');
const youChoiceDisplay = document.getElementById('you-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button.btn');
let youChoice; 
let competitorChoice;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click",(evental) =>{
  youChoice = evental.target.id;
  //youChoice = possibleChoice.innerText; //this is one of options
  youChoiceDisplay.innerHTML = youChoice;
  generateCompetitorChoice();
  resultFc();
}))

function generateCompetitorChoice()
{
  const randomNumber = Math.floor(Math.random()*3) +1;

  if (randomNumber === 1){
    competitorChoice = "rock";
  }
  if (randomNumber === 2){
    competitorChoice = "paper";
  }
  if (randomNumber === 3){
    competitorChoice = "scissor";
  }
competitorChoiceDisplay.innerHTML=competitorChoice;
}

function resultFc()
{
  if(competitorChoice === youChoice){
    result = " Draw babe";
  }
  if(competitorChoice ==="rock" && youChoice === "paper"){
    result = "Lost";
  }
  if(competitorChoice ==="rock" && youChoice === "scissor"){
    result = "Lost";
  }
  if(competitorChoice ==="paper" && youChoice === "scissor"){
    result = "Win";
  }
  if(competitorChoice ==="paper" && youChoice === "rock"){
    result = "Lost";
  }
  if(competitorChoice ==="scissor" && youChoice === "rock"){
    result = "Win";
  }
  if(competitorChoice ==="scissor" && youChoice === "paper"){
    result = "Lost";
  }
  if(competitorChoice ==="rock" && youChoice === "paper"){
    result = "Win";
  }
  resultDisplay.innerHTML = result;
}

