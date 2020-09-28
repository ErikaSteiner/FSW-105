var enemies= ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(is_there_kryptonite, enemyName) { 
    if (!is_there_kryptonite) { 
    return "Superman beats " + enemyName + ", of course";
    } else {
    return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
}
    }

function howAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
}

consol.log (howAttractedIsLoisLaneToMe ());

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");
    }
}