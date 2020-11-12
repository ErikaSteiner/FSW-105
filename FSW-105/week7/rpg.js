import { question, keyInSelect } from 'readline-sync';

const playerName = question( `Hello Player! Please enter your name to start.`);
const player = playerName.toUpperCase()
let welcomeMessage = 'Welcome ${player} to my RPG game '
const enemyType = ['Witch', 'Goblin', 'Zombie'];
const reward = ['Health Potion', 'Magic Powers', `Protective Forcefield `];
var Winnings = [];
let playerHealth = 100;
let attackPower = 50;
const options = ['Walk', 'Exit', 'Print'];
let findReward = reward[Math.floor(Math.random()*reward.length)];

function game() {
    let attackPower = Math.floor(Math.random()* attackPower)
    let enemyType = enemies[Math.floor(Math.random() *enemies.length)];
    let enemyHealth = 100;
    let enemyPower = Math.floor(Math.random()* 5)}

let firstMove;

firstMove = keyInSelect(options, 'Make your first move!');

if(options[firstMove] == 'Walk') {
    let key=Math.random();
    if(key<= .3) {
        console.log('Walking...');
    } 
    else if (options[firstMove] == 'Exit') {
        return playerHealth = 0;
    }
     else if (options[firstMove] == 'Print') {
        console.log('player: ' + player + '\n' + 'Health: ' + playerHealth + '\n' + 'Rewards: ' + findReward);
    }
     else if (key >= .3) {
        console.log(enemyType + ' wants to challenge you!');
        while(enemyHealth > 0 && playerHealth > 0) {
            const user = question('Do you except the challenge? Press a to attack \n Or Press r to run away');
            switch(user) {
                case 'a' : 
                enemyHealth-= attackPower;
                console.log('Lets start this' + enemyType + ' with ' + attackPower + ' attack power!');

                playerHealth -= enemyPower;
                console.log('The enemy hit you with ' + enemyPower + ' strength!');

                if(enemyHealth <= 0) {
                    console.log('Yay! You defeated ' + enemyType + '! \n' + enemyType + ' is waiting for you + findReward')
                    let steal = Math.random();
                    if(steal <= .3) {
                        Winnings.push(findReward);
                    }
                } 
                else if(playerHealth <=0) {
                    console.log(enemyType + ' Oh no! You have been defeated');
                }
                case 'r': 
                const run = Math.random();
                if(run<.5) {
                    console.log('Your attempt to run has failed' + enemyType + ' ' + enemyPower + " has trapped you and now you must battle!");
                } 
                else {
                    console.log('Your lucky, you almost did not make it!');
                    break;
                }
            }
        }
    }
}

while(playerHealth > 0) {
    playerRestore = function() {
        playerActive = true;
        playerHealth = 100;
    };
    playerRestore();
    game();
}