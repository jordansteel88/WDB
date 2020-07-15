var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1score = 0;
var p2score = 0;
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");



p1button.addEventListener("click", function(){
	if(!gameOver) {
	p1score++;
	if(p1score === winningScore){
	p1Display.classList.add("winner");	
	gameOver = true;
	}
	p1Display.textContent = p1score;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver) {
	p2score++;
	if(p2score === winningScore) {	
	p2Display.classList.add("winner");	
	gameOver = true;
	}
	p2Display.textContent = p2score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
})

