
// some vars

var opt1 = document.getElementById('option1') 
opt1.innerHTML = 'Start';
var opt2 = document.getElementById('option2')
opt2.innerHTML = 'Start?';
var opt3 = document.getElementById('option3')
opt3.innerHTML = 'Start!';

var levelImg = document.getElementById('level_image')

var levelText = document.getElementById('level_text')

var textTop = document.getElementById('level_title')
textTop.innerHTML = 'Start het spel';

var inventory = {
	dungeonKey: false, 
};
// all the functions

function reset(){
	level1();
}

function getItem(a){
	inventory[a] = true;
	console.log(inventory);
}

 

function level1(){
	opt1.innerHTML = "Enter the building";
	opt2.innerHTML = "Search the island";
	opt3.innerHTML = "Jump in the water";
	levelImg.src = "Level Images/Adventure-game-map.png";
	textTop.innerHTML = "Op het eiland";
	opt1.onclick = level2;
	opt2.onclick = ;
}

function level2(){
	opt1.innerHTML = "";
	opt2.innerHTML = "";
	opt3.innerHTML = "";
	levelImg.src = "Level Images/.png";
	textTop.innerHTML = "";
	
}