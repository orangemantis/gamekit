var gameTitle = "The Legend of Helga";
var intro = "The princess has been kidknapped, you must save her!";
var playerName = "";

alert(gameTitle);

function askName(){
    playerName = prompt("Player what is your name?");
    if (!playerName) {
        alert("You must enter a name to continue.");
        askName();
    }
}

askName();

alert(intro);