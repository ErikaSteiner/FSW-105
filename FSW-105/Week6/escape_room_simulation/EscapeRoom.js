var readlineSync = require('readline-sync');

const playerName = readlineSync.question('Hello, Please enter your name: ');
const introduction = 'Welcome ' + (playerName) + ' to the Escape Room';
console.log(introduction);
//boolean 
let playerAlive = true;
let doesplayerhaveKey = false;

while(playerAlive == true){
    const menuOptions = readlineSync.keyIn('Enter 1 to put hand in hole. /n Enter 2 to search room for key. /n Enter 3 to open the door.', {limit: '$<1-3>'});
    if (menuOptions == 1){
        playerAlive = false;
       
    console.log("Sorry You Died. Please try again. You must find the Key first")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }else if (menuOptions == 2 && doesplayerhaveKey == false){
        //find the Key
        //Player has never found the Key
        doesplayerhaveKey = true;
        console.log("You search the room again, you find the key hidden in the corner");
    }else if (menuOptions == 2 && doesplayerhaveKey == true){
    //find the Key
    //Player has never found the Key
        console.log("You dropped the key in the dark room you must look around to find it again");
    } else if (menuOptions == 3 && doesplayerhaveKey == false){
        //open the door
        //Since the player has not foud the key, display that they have to locate the key first

        console.log("You try to open the door but it does not unlock");
    }else if (menuOptions == 3 && doesplayerhaveKey == true){
        //open door
        //Since the player has found the key, display succes mesage
        console.log("After you put the key into the lock, it finlly opens. You open the door and Oh No! it's a trap. You are crushed by a bolder");
        playerAlive = false;
    }
}