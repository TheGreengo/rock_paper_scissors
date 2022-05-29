const btns = document.querySelectorAll('.option');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('.final-results');
const play = document.querySelector('#playWin');
const comp = document.querySelector('#compWin');
const resetBut = document.querySelector('.reset');

resetBut.addEventListener('click', () => reset());

rock.addEventListener('click', () => playGame(computerPlay(),"rock"));
paper.addEventListener('click', () => playGame(computerPlay(),"paper"));
scissors.addEventListener('click', () => playGame(computerPlay(),"scissors"));

let numWin = 0;
let numLose = 0;
let over = false;

function playGame(input,computer){
if (over != true)
{
if(input == "rock" && computer == "rock"){
    result.textContent = "Tie!";
}else if(input == "rock" && computer == "paper"){
    comp.textContent = ++ numLose;
    result.textContent = "Paper beats Rock! You Lose!";
}else if(input == "rock" && computer == "scissors"){
    play.textContent = ++ numWin;
    result.textContent = "Rock beats Scissors! You Win!";
}else if(input == "scissors" && computer == "rock"){
    comp.textContent = ++ numLose;
    result.textContent = "Rock beats Scissors! You Lose!";
}else if(input == "scissors" && computer == "paper"){
    play.textContent = ++ numWin;
    result.textContent = "Scissors beats Paper! You Win!";
}else if(input == "scissors" && computer == "scissors"){
    result.textContent = "Tie!";
}else if(input == "paper" && computer == "rock"){
    play.textContent = ++ numWin;
    result.textContent = "Paper beats Rock! You Win!";
}else if(input == "paper" && computer == "paper"){
    result.textContent = "Tie!";
}else if(input == "paper" && computer == "scissors"){
    comp.textContent = ++ numLose;
    result.textContent = "Scissors beats Paper! You Lose!";
}
checkWinner();
}
}

function computerPlay(){
    let answer = Math.random() * 3;
    if (answer >= 2){return "rock";}
    else if (answer >= 1){return "paper";}
    else {return "scissors";}
}

function checkWinner(){
    if (numWin == 5)
    {
        result.textContent = "You Win! Congrats! To play again, click the reset button!";
        over = true;
    }
    if (numLose == 5)
    {
        result.textContent = "You Lost! So sorry! To play again, click the reset button!";
        over = true;
    }
}

function reset()
{
    over = false;
    numLose = 0;
    comp.textContent = numLose;
    numWin = 0;
    play.textContent = numWin;
    result.textContent = "Welcome to a new game!!";
}