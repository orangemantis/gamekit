/* Important game variable */
var myName = "Zultan Swack";
var title = "The Legend of Princess Helga";
var playerName = "";

var screen1Text = "Please enter your name:";
/* Show the game title." */
alert(title);
playerName = prompt(screen1Text);
if (!playerName) {
    alert("You must enter a name");
    playerName = prompt(screen1Text);
}