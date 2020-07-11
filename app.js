let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
//storing something for future use 
//storing all in variables so i can use it later 
//i stored it all because i did not want to use te document.getElement or 
//query selector
//lazy writing ??? i think i am smort
function getComputerChoice()
{
	const choices = ['r','p','s'];
	const randomNumber =  Math.floor(Math.random()*3);
	return choices[randomNumber];
}
function win(a,b)
{
	///increase the user score;
	userScore++;
	userScore_span.innerHTML = userScore;
	///inside the marks
	computerScore_span.innerHTML = computerScore;
	if (a === "r" && b === "s")
	{
		result_p.innerHTML = "Rocks beats Scissors! You WIN" ;

	}
	else if (a === "p" && b === "r")
	{
		result_p.innerHTML = "Paper beats Rock ! You WIN";
	}
	else if(a === "s" && b === "p")
	{
		result_p.innerHTML = "Scissors beats Paper ! You WIN";
	}
}
function lose(a,b)
{
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	userScore_span.innerHTML = userScore;

	if (a === "s" && b === "r")
	{
		result_p.innerHTML = "Rocks beats Scissors! Computer WINS" ;

	}
	else if (a === "r" && b === "p")
	{
		result_p.innerHTML = "Paper beats Rock ! Computer WINS";
	}
	else if(a === "p" && b === "s")
	{
		result_p.innerHTML = "Scissors beats Paper ! Computer WINS";
	}

}
function draw(a,b)
{
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	if(a === b)
	{
		result_p.innerHTML =  "DRAW ! TRY AGAIN !";
	}
}


function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
		break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice);
		break;
		case "ss":
		case "rr":
		case "pp":
			draw(userChoice,computerChoice);
		break;
	}
}
function main()
{
	rock_div.addEventListener('click', function()
		{
			game("r");
			
		}
	)
	paper_div.addEventListener('click',function()
		{

			game("p");
		}
	)
	scissors_div.addEventListener('click', function()
		{

			game("s");
		}
	)
}
main();

