function computerPlay()
{
    let playNum = Math.random();
    playNum = playNum * 3;

    if (playNum > 2)
    {
        return "Rock";
    }
    else if (playNum > 1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors"
    }
}

function playGame(computer,input)
{
    input = input.toLowerCase();
    if (computer == "Rock" && input == "scissors")
    {
        return "You lose! Rock beats Scissors";
    }
    if (computer == "Rock" && input == "rock")
    {
        return "Tie!";
    }
    if (computer == "Rock" && input == "paper")
    {
        return "You win! Paper beats Rock!";
    }
    if (computer == "Scissors" && input == "scissors")
    {
        return "Tie!";
    }
    if (computer == "Scissors" && input == "rock")
    {
        return "You win! Rock beats Scissors!";
    }
    if (computer == "Scissors" && input == "paper")
    {
        return "You lose! Scissors beats Paper"
    }
    if (computer == "Paper" && input == "scissors")
    {
        return "You win! Scissors beats Paper!";
    }
    if (computer == "Paper" && input == "rock")
    {
        return "You lose! Paper beats Rock"
    }
    if (computer == "Paper" && input == "paper")
    {
        return "Tie!";
    }
    else
    {
        return "unrecognized response";
    }
}

function game()
{
    let done = false;
    let numWin = 0;
    let numLose = 0;
    let numTie = 0;
    while (done == false)
    {
        let pi = playGame(computerPlay(),window.prompt("To play, please type in either Rock, Paper, or Scissors"));
        
        if (pi == "You lose! Paper beats Rock" || pi == "You lose! Rock beats Scissors" || pi == "You lose! Scissors beats Paper")
        {
            numLose = numLose + 1;
        }
        if (pi == "You win! Paper beats Rock!" || pi == "You win! Rock beats Scissors!" || pi == "You win! Scissors beats Paper!")
        {
            numWin = numWin + 1;
        }
        if (pi == "Tie!")
        {
            numTie = numTie + 1;
        }
        if (numLose == 5)
        {
            return "Too bad! You lose!";
        }
        if (numWin == 5)
        {
            return "Congrats! You won!";
        }
    }
}