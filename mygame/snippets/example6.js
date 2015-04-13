var gameTitle = "The Lengend of Helga";
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

/*Options screen*/
function playScreen1(){
    var screen1Text = "The princess is not going to save herself, " +
    "where will you start? \n" +
    "A) Venture into the Dark Forest \n" +
    "B) Visit the Dark Forest Temple \n" +
    "C) Quit";


    function checkAnswer(answer){
        if (answer === "A") {
            playScreen2();
        }

        if (answer === "B") {
            alert("You need a key to enter the temple.");
            playScreen1();
        }
    }

    var playerAnswer = prompt(screen1Text);
    checkAnswer(playerAnswer);
}

/*Option screen 2*/
function playScreen2(){
    alert("Screen 2 played.");
}

playScreen1();