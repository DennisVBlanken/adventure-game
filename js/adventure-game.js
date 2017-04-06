
// *some variables*

var opt1 = document.getElementById('option1');
opt1.innerHTML = 'Start';
var opt2 = document.getElementById('option2');
opt2.innerHTML = 'Start?';
var opt3 = document.getElementById('option3');
opt3.innerHTML = 'Start!';
var opt4 = document.getElementById('option4');
var goldCounter = document.getElementById('goldCounter');
var playerHealthBar = document.getElementById('playerHealthBar');
var levelImg = document.getElementById('level_image');

var levelText = document.getElementById('level_text');

var textTop = document.getElementById('level_title');

var playerHealth = 100;
var maxHealth = 100;
//status of the onetime only events.
var state = 1;
var jumpState = 1;

var luck = Math.floor((Math.random() * 100) + 1);
console.log(luck)
textTop.innerHTML = 'Start het spel';
// an array of the items the player can get in the game.
var inventory = {
	dungeonKey: false,
	armor: false,
	sword: false,
	key: false,
}
// the currency used to buy stuff
var gold = 0

// *all the functions*
//Used to reset the game
function reset(){
	level1();
	inventory["dungeonKey"] = false;
	gold = 0;
	goldCounter.innerHTML = "Gold: " + gold
	opt1.style = "display: ;";
	opt2.style = "display: ;";
	opt3.style = "display: ;";
	luck = Math.floor((Math.random() * 100) + 1);
	jumpState = 1;
	alert("Try again!");
}
//Used to show the player died/failed
function death(){
	opt1.style = "display: none;";
	opt2.style = "display: none;";
	opt3.style = "display: none;";
	textTop.innerHTML = "";
	levelImg.src = "Level Images/DeathScreen.jpg";
	if(level_image && level_image.style) {
    level_image.style.width = '700px';
	}
}
//Used to add gold to the variable
function getGold(a){
	gold = gold + a
	goldCounter.innerHTML = "Gold: " + gold
	return gold
}
//Used to remove gold from the variable
function payGold(a){
	gold = gold - a
	goldCounter.innerHTML = "Gold: " + gold
	return gold
}
//Used to make item variables True
function getItem(a){
	inventory[a] = true;
}
//Used to add health to the variable
function getHealth(a){
	playerHealth = playerHealth + a;
	playerHealthBar.innerHTML = "HP: " +  playerHealth;
	if (playerHealth > 100) {playerHealth = maxHealth;}
	return playerHealth
}
//Used to remove health from the variable
function loseHealth(a){
	if (inventory["armor"] === false) {
	playerHealth = playerHealth - a;
	playerHealthBar.innerHTML = "HP: " +  playerHealth;}
	else {
	playerHealth = playerHealth - Number(a - 2);
	playerHealthBar.innerHTML = "HP: " +  playerHealth;}
	if (playerHealth < 1) {death();}
	return playerHealth
}
//Island lvl
function level1(){
	opt1.innerHTML = "Enter the building";
	opt2.innerHTML = "Search the island";
	opt3.innerHTML = "Jump in the water";
	levelImg.src = "Level Images/Adventure-game-map.png";
	textTop.innerHTML = "On the island";
	opt1.onclick = function(){ level2()};
	opt2.onclick = function(){ if (inventory["dungeonKey"] === false) { getItem("dungeonKey"); alert("You found the key to the dungeon!")}
		else alert("You didn't find anything")};
	opt3.onclick = function(){ if (jumpState === 1) { jumpState = 2; if (luck < 50) { death()}
		else if (luck > 50) { getGold(50); alert("You jumped in the water and found some gold.")}
		else if (luck === 50) { getGold(500); alert("you found a sunken treasure ship filled with gold!!!!")}}
		else alert("You have already found eveything there is.")};
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
	opt1.onclick = function(){ if (state === 1) { alert("You found some gold under the bed."); getGold(50); state = 2;}
		else alert("There is nothing else.")};
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
	opt4.style.display = "none";
	levelImg.src = "Level Images/Dungeon2.png";
	textTop.innerHTML = "The shop";
	opt1.onclick = function(){ Shop()};
	opt2.onclick = function(){ level3B()};
	opt3.onclick = function(){ level3()};
	if(level_image && level_image.style) {
    level_image.style.width = '450px';}
}
//The shop
function Shop(){
	if (inventory["armor"] === false) { opt1.innerHTML = "Buy some armor";}
		else { opt1.innerHTML = "*SOLD*";}
	if (inventory["sword"] === false) { opt2.innerHTML = "Buy a better weapon";}
		else { opt2.innerHTML = "*SOLD*";}
	if (inventory["key"] === false) { opt3.innerHTML = "Buy the key";}
		else { opt3.innerHTML = "*SOLD*";}
	opt4.style.display = "inline-block";
	opt4.innerHTML = "Leave the shop"
	levelImg.src = "Level Images/ShopWindow.png";
	textTop.innerHTML = "The shop";
	opt1.onclick = function(){ if(gold >= 60){getItem("armor"); payGold(60); alert("You bought some armor"); Shop()}
		else{alert("You do not have enough gold.")}};
	opt2.onclick = function(){ if(gold >= 40){getItem("sword"); payGold(40); alert("You bought a better sword"); Shop()}
		else{alert("You do not have enough gold.")}};
	opt3.onclick = function(){ if(gold >= 50){getItem("key"); payGold(50); alert("You bought a key for a chest"); Shop()}
		else{alert("You do not have enough gold.")}};
	opt4.onclick = function(){ level3A()};
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
	opt4.style.display = "inline-block";
	opt4.innerHTML = "Help the random mage fight";
	levelImg.src = "Level Images/Dungeon4.png";
	textTop.innerHTML = "";
	opt1.onclick = function(){ };
	opt2.onclick = function(){ };
	opt3.onclick = function(){ };
	if(level_image && level_image.style) {
    level_image.style.width = '500px';} 
}