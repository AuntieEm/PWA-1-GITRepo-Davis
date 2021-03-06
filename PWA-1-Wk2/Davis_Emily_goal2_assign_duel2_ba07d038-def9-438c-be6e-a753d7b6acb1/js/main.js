/*
Name:  Emily Davis
Date:  June 12, 2015
Class & Section:  PWA1-c201506
Comments: "Goal 1: Assignment: Duel1
*/


//self-executing function
(function(){    //*** begin function
    console.log("FIGHT!!!");    //*** print 'FIGHT!!!' message to test function

    //player name
    var fighter1 = ["Spiderman", 20, 100];    //*** get player 1's name, damage, & health
    var fighter2 = ["Batman", 20, 100];       //*** get player 2's name, damage, & health

    var round = 0;      //*** get round number


    function fight(){       //*** begin Fight function
        console.log('in the fight function');       //*** print 'in the fight function' message to test function

        alert(fighter1[0] + ":  " + fighter1[2] + " *START* " + fighter2[0] + ":  " + fighter2[2]);
        //*** for line above - alert user of round 1 starting - display player 1's name and health as well as player 2's name and health

        for(var i=0; i<10; i++){    //*** begin for loop to generate round number

            //random formula is - Math.floor(Math.random) * (max - min) + min);

            var minDamage1 = fighter1[1] * .5;        //*** get player 1's minimum damage using math
            var minDamage2 = fighter2[1] * .5;        //*** get player 2's minimum damage using math
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);   //*** calculate random number for player 1's damage for each round
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);   //*** calculate random number for player 2's damage for each round

            //console.log(f1);  //*** test damage funciton 1
            //console.log(f2);  //*** test damage function 2

            //inflict damage
            fighter1[2]-=f1;    //*** deduct health points from player 1's health after inflicting damage
            fighter2[2]-=f2;    //*** deduct health points from player 2's health after inflicting damage

            //console.log(playerOneHealth);     //*** test math
            //console.log(playerTwoHealth);     //*** test math


            console.log(fighter1[0]+":  " + fighter1[2] + " " + fighter2[0] + ":  " + fighter2[2]);
            //*** for line above - print player 1's health and player 2's health

            var results = winnerCheck();    //*** get results by running winner check function
            console.log(results);       //*** print results to test funciton

            if(results === "no winner"){    //*** if there is no winner
                round ++;   //*** continue to the next round
                alert(fighter1[0] + ":  " + fighter1[2]+" *ROUND " + round + " OVER* " + fighter2[0] + ":  " + fighter2[2]);{}
                //*** for line above - alert user of player 1's health and player 2's health after each round is over
            }else{  //*** else
                alert(results);     //*** continue on with the results alert
                break;      //*** break out of current function
            }   //*** close else statement

        };  //*** close for loop


    };  //*** close fight function


    function winnerCheck(){     //*** begin winner check function
        console.log("in winnerCheck FN");   //*** print 'in winnerCheck FN' to test function

        var result = "no winner";   //*** get result

        if(fighter1[2] < 1 && fighter2[2] < 1){
        //*** for line above - begin loop - if player 1's health is less than 1 and player 2's health is less than 1
          result = "You Both Die";      //*** then result will print 'You both die!' message

        }else if(fighter1[2] <1){   //*** else if player 1's health is less than one
            result = fighter2[0] + " WINS!!!"     //*** then result will print 'player 2 wins' message
        }else if(fighter2[2] <1){       //*** else if player 2's health is less than 1
            result = fighter1[0] + " WINS!!!"     //*** then result will print 'player 1 wins' message
        };  //*** close else if statement

        return result;      //*** return the result of the loop

    };  //*** close the winner check function


    /***** The program gets started below *****/
    console.log('program starts');  //*** print 'program starts' message
    fight();    //*** run the fight function


})();   //*** end function