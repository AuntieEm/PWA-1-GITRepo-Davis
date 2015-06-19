/*
Name:  Emily Davis
Date:  June 19, 2015
Class & Section:  PWA1-c201506
Comments: "Goal 4: Assignment: Duel3
*/


//self-executing function
(function(){                                                                                                            //***   invoke function
    //player info
    var fighters = {                                                                                                    //***   set variable object array called fighters
        fighter1: {                                                                                                     //***   first index of object called fighter 1
            name: "Spiderman:  ",                                                                                       //***   key of name with value of spiderman
            damage: 20,                                                                                                 //***   key of damage with value of 20
            health: 100                                                                                                 //***   key of health with value of 100
        },
        fighter2: {                                                                                                     //***   2nd index of object called fighter 2
            name: "Batman:  ",                                                                                          //***   key of name with value of batman
            damage: 20,                                                                                                 //***   key of damage with value of 20
            health: 100                                                                                                 //***   key of health with value of 100
        }
    };

    var round = 1;                                                                                                      //***   set variable called round with value of 1

    var fighter1Score = document.getElementById("kabal");                                                               //***   set variable called fighter1score and get data from kabal id
    fighter1Score.innerHTML = fighters.fighter1.name + fighters.fighter1.health;                                        //***   change the html of above to show fighter name and health

    var fighter2Score = document.getElementById("kratos");                                                              //***   set variable called fighter1score and get data from kratos id
    fighter2Score.innerHTML = fighters.fighter2.name + fighters.fighter2.health;                                        //***   change the html of above to show fighter name and health

    function fight(){                                                                                                   //***   invoke fight function
        var roundNum = document.getElementById("round");                                                                //***   set variable roundNum to get data from round id
        roundNum.innerHTML = "Round " + (round++) + " complete.";                                                         //***   change html of above to say round # complete

        var minDamage1 = fighters.fighter1.damage * .5;                                                                 //***   set variable minDamage1 to equal half the fighter's damage
        var minDamage2 = fighters.fighter2.damage * .5;                                                                 //***   set variable minDamage2 to equal half the fighter's damage
        var f1 = Math.floor(Math.random() * (fighters.fighter1.damage - minDamage1) + minDamage1);                      //***   set variable f1 to calculate a random number to determine fighter's damage
        var f2 = Math.floor(Math.random() * (fighters.fighter2.damage - minDamage2) + minDamage2);                      //***   set variable f2 to calculate a random number to determine fighter's damage

        fighters.fighter1.health-=f1;                                                                                   //***   calculate the fighter's health after taking damage
        fighters.fighter2.health-=f2;                                                                                   //***   calculate the fighter's health after taking damage
        fighter1Score.innerHTML = fighters.fighter1.name + fighters.fighter1.health;                                    //***   change html of score to output new health level
        fighter2Score.innerHTML = fighters.fighter2.name + fighters.fighter2.health;                                    //***   change html of score to output new health level

        var gameOver = winnerCheck();                                                                                   //***   set variable gameOver to call winnerCheck function
    };

    window.onload = click;                                                                                              //***   tell page to load before running click function
    function click() {                                                                                                  //***   invoke click function
        var button = document.getElementById("fight_btn");                                                              //***   set variable button to get data from fight_btn id
        button.onclick = fight;                                                                                         //***   when button is clicked call fight function
    };

    function winnerCheck(){                                                                                             //***   invoke winner check function
        var gameOver = document.getElementById("scores");                                                               //***   set variable gameOver to get data from scores id

        if(fighters.fighter1.health < 1 && fighters.fighter2.health < 1){                                               //***   function if both fighter's health is less than one

            gameOver.innerHTML = "Both fighters die.";                                                                  //***   change html of gameOver to say both fighters die
            endgame();                                                                                                  //***   call endgame function

        }else if(fighters.fighter1.health <1){                                                                          //***   else if fighter 1's health is less than one
            gameOver.innerHTML = fighters.fighter2.name + "WINS!!!";                                                    //***   change html of gameOver to say player 2 wins
            endgame();                                                                                                  //***   call endgame function
        }else if(fighters.fighter2.health <1){                                                                          //***   else if fighter 2's health is less than one
            gameOver.innerHTML = fighters.fighter1.name + "WINS!!!";                                                    //***   change html of gameOver to say player 1 wins
            endgame();                                                                                                  //***   call endgame function
        };
    };
    function endgame(){                                                                                             //***   invoke endgame function
        var done = document.querySelector('#fight_btn a');                                                          //***   set variable done to get data from fight button
        done.innerHTML = 'GAME OVER';                                                                               //***   change html of done to say "game over"
    };


})();
