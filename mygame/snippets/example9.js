var gd = {
    name: "Roon",
    hearts: 5,
    gems: 0,
    enemies: [],
    _currentScreen: 0,
    _previousScreen: 0,
    _gameOverWin: 9999,
    _gameOverLose: 9999,
    _quitScreen: 9999,
    screens: [{
        id: 1,
        title: "The Legend of Helga",
        text: "Click OK to begin.",
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        hideStats: true,
        action: function(ge, gd, answer){
            return {
                goto: 9999
            };
        }

    }]
};
