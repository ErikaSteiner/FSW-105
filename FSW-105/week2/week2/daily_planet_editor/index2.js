var enemyName = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemyName.length; i++) {
    var isThereKryptonite;
    isThereKryptonite = i % 2 === 0 ? true : false;
    console.log(whoWins(isThereKryptonite, enemyName[i]));
}

function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe());

var isClarkKent = true;
var isSuperman = false;

while (isClarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        isClarkKent = false;
        isSuperman = true;
        console.log("Now I'm Superman!");
    }
}