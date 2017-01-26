
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
}
var gold = 0

// all the functions

//Usedto reset the game
function reset(){
	level1();
	inventory["dungeonKey"] = false;
	gold = 0;
	opt1.style = "display: ;";
	opt2.style = "display: ;";
	opt3.style = "display: ;";
}
//Used to show the player died/failed
function death(){
	opt1.style = "display: none;";
	opt2.style = "display: none;";
	opt3.style = "display: none;";
	textTop.innerHTML = "";
	levelImg.src = "Level Images/DeathScreen.jpg";
	if(level_image && level_image.style) {
    level_image.style.width = '900px';
	}
}
//Used to add gold to the variable
function getGold(a){
	gold = gold + a
	return gold
}
//Used to make item variables True
function getItem(a){
	inventory[a] = true;
	alert("You got " + a);
}
//Island lvl
function level1(){
	opt1.innerHTML = "Enter the building";
	opt2.innerHTML = "Search the island";
	opt3.innerHTML = "Jump in the water";
	levelImg.src = "Level Images/Adventure-game-map.png";
	textTop.innerHTML = "Op het eiland";
	opt1.onclick = function(){ level2()};
	opt2.onclick = function(){ getItem("dungeonKey")};
	opt3.onclick = function(){ death()};
	if(level_image && level_image.style) {
    level_image.style.width = '700px';}
}
//House lvl
function level2(){
	opt1.innerHTML = "Check the bedroom";
	opt2.innerHTML = "Go back outside";
	opt3.innerHTML = "Take the staircase down";
	levelImg.src = "Level Images/Het-huis.png";
	textTop.innerHTML = "Living room";
	opt1.onclick = function(){ alert("you found some gold under the bed."); getGold(50);};
	opt2.onclick = function(){ level1()};
	opt3.onclick = function(){ level3()};
	if(level_image && level_image.style) {
    level_image.style.width = '400px';}
}
//Dungeon lvl 1
function level3(){
	var dungeonKey = inventory["dungeonKey"]
	if (dungeonKey) {
		opt1.innerHTML = "Go to the left";
		opt2.innerHTML = "Go back upstairs";
		opt3.innerHTML = "Go to the right";
		levelImg.src = "Level Images/Dungeon1.png";
		textTop.innerHTML = "Dungeon entrance";
		opt1.onclick = function(){ level3A()};
		opt2.onclick = function(){ level2()};
		opt3.onclick = function(){ level4()};
		if(level_image && level_image.style) {
	    level_image.style.width = '550px';}
		} else {
			alert("The door to the dungeon is locked.");
	}
}
//Dungeon lvl 2 (the shop)
function level3A(){
	opt1.innerHTML = "Buy some items";
	opt2.innerHTML = "Go to the next room";
	opt3.innerHTML = "Go back";
	levelImg.src = "Level Images/Dungeon2.png";
	textTop.innerHTML = "The shop";
	opt1.onclick = function(){ };
	opt2.onclick = function(){ level3B()};
	opt3.onclick = function(){ level3()};
	if(level_image && level_image.style) {
    level_image.style.width = '450px';}
}
//Dungeon lvl 3
function level3B(){
	opt1.innerHTML = "";
	opt2.innerHTML = "";
	opt3.innerHTML = "";
	levelImg.src = "Level Images/Dungeon3.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ };
	opt2.onclick = function(){ };
	opt3.onclick = function(){ };
	if(level_image && level_image.style) {
    level_image.style.width = '700px';}
}
//Dungeon lvl 4
function level4(){
	opt1.innerHTML = "";
	opt2.innerHTML = "";
	opt3.innerHTML = "";
	levelImg.src = "Level Images/Dungeon4.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ };
	opt2.onclick = function(){ };
	opt3.onclick = function(){ };
	if(level_image && level_image.style) {
    level_image.style.width = '500px';}
}

