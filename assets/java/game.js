//hello world

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWDHCTDFBFwe7aUI4W9UVjuhbp5J_4wS8",
    authDomain: "rps-pokegame.firebaseapp.com",
    databaseURL: "https://rps-pokegame.firebaseio.com",
    projectId: "rps-pokegame",
    storageBucket: "rps-pokegame.appspot.com",
    messagingSenderId: "261071373067"
};
firebase.initializeApp(config);

var database = firebase.database();

// score stuff
var wins;
var losses;
var theme;
var poke = ["venusaur" , "charizard" , "blastoise"];
var choice;
var name = prompt("Hello trainer, what's your name?");


function game() {
    alert("For best effect make sure to play music.");

    $("#start").on("click", function() {
        for(var i = 0; i <poke.length; i++) {
            var mon = poke[i];
            console.log(mon);
            $("#intro").text("");
            $("#feild").append("<button><img class='monBut' id='" + mon + "' val='" + mon + "' src='assets/images/" + mon +".png' height='300' width='300'></button>");
            wins = 0;
            losses = 0;
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#start").html("");

            iChoose();
        };
    });
};

function iChoose() {
    $("#venusaur").on("click", function() {
        choice = "venusaur";
        console.log(choice);
        database.ref().set({
            Player: name,
            choiceMade: choice
        });
    });
    $("#charizard").on("click", function() {
        choice = "charizard";
        console.log(choice);
        database.ref().set({
            Player: name,
            choiceMade: choice
            
        });
    });
    $("#blastoise").on("click", function() {
        choice = "blastoise";
        console.log(choice);
        database.ref().set({
            Player: name,
            choiceMade: choice
            
        });
    });

};


game();

