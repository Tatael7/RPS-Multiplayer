//hello world

// score stuff
var wins;
var losses;
var theme;
var poke = ["venusaur" , "charizard" , "blastoise"];
var choice;
var versus;
var name = prompt("Hello trainer, what's your name?");

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

//firebase stuff
var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
connectedRef.on("value", function(snap) {
    if (snap.val()) {
      var con = connectionsRef.push(true);
      con.onDisconnect().remove();
    }
});

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    versus = snapshot.val().choiceMade;
    console.log(versus);
});




function game() {

    $("#start").on("click", function() {
        for(var i = 0; i <poke.length; i++) {
            var theme = new Audio("assets/battle.mp3");
            theme.play();
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
        effective();
        database.ref().set({
            Player: name,
            choiceMade: choice
        });
    });
    $("#charizard").on("click", function() {
        choice = "charizard";
        console.log(choice);
        effective();
        database.ref().set({
            Player: name,
            choiceMade: choice
            
        });
    });
    $("#blastoise").on("click", function() {
        choice = "blastoise";
        console.log(choice);
        effective();
        database.ref().set({
            Player: name,
            choiceMade: choice
            
        });
    });

};

function effective() {
    alert(choice + " : VS : " + versus);
};

function battle() {
    if((choice=== "venusaur" && versus==="blastoise") || (choice==="blastoise" && versus==="charizard") ||
    (choice==="charizard" && versus==="venusaur")){
        wins++;
    }else if(choice === versus) {
        ties++;
    }else{
        losses++;
    };
};



function trash() {
    $("#send").on("click", function(event) {
        event.preventDefault();

        var spit = $("#msg").val().trim();
        console.log(spit);
    })
}


game();
trash();

