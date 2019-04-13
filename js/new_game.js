// var name;
var diff;
function createPlayer() {
	// name = document.getElementById("playerName").value;
	diff = document.getElementById("difficultySelection").value;
	window.location='player_created.html';
    }

function playerCreated(){
	document.getElementById("diff").innerHTML = diff;
	// document.getElementById("name").innerHTML = name;
}