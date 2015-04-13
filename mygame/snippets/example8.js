var gameTitle = "The Legend of Helga";
var intro = "The princess has been kidnapped, you must save her!";
var playerName = "";
var templeKey = false;
var lantern = false;
var hearts = 5;
var gems = 0;

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
            alert("You need a key to enter the temple");
            playScreen1();
        }
    }

    var playerAnswer = prompt(screen1Text);
    checkAnswer(playerAnswer);
}

/*Option screen 2*/
function playScreen2(){
    var screen2Text = "The forest is dark and danger lurks ahead, " +
    "what will you do? \n" +
    "A) Look for a lantern \n" +
    "B) Look for a the Dark Forest Temple key \n" +
    "C) Quit";


    function checkAnswer(answer){
        var roll = ge.rollDice();
        if (answer === "A") {
            if (lantern) {
                alert("You can't find something you already have.");
                playScreen2();
            }
            else {
               if (roll > 6) {
                    lantern = true;
                    alert("You found a lantern");
                    playScreen2();
               }
               else {
                    alert("No luck finding a lantern, try again.");
                   playScreen2();
               }
            }
        }

        if (answer === "B") {
            if (templeKey) {
                alert("You already have the key, head to the temple!");
                playScreen2();
            }
            else {
                if (roll === 3 || roll === 6 || roll === 9 || roll === 12) {
                    templeKey = true;
                    alert("You found the key!");
                }
                else {
                    //fight here
                    var roll2 = ge.rollDice();
                    if (roll > 5) {
                        gems += 5;
                        alert ("You came across a Grublor and defeated it!" +
                               " You won 5 gems!");
                        playScreen2();
                    }
                    else {
                        hearts--;
                        alert("You battled a Grublor and were hurt in the battle." +
                              " You lost a heart.");
                    }
                    if (hearts < 1) {
                        alert("This was your final battle, game over.");
                    }
                    else {
                        playScreen2();
                    }
                }
            }
        }
    }
    
    var answer = prompt(screen2Text);
    checkAnswer(answer);
}

playScreen1();
