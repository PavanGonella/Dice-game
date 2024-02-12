var chance = 1,
    score1 = 0,
    score2 = 0,
    win = 0;


function addName() {
    var p1 = document.getElementById("player1Name");
    var p2 = document.getElementById("player2Name");

    player1.innerHTML = p1.value;
    player2.innerHTML = p2.value;

    document.getElementById("rollPlayer1").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("restart").disabled = false;


}


function rollDice1() {
    var rand1 = 0;
    for (let i = 0; i < 20; i++) {
        rand1 = Math.floor(Math.random() * 6) + 1;
        switch (rand1) {
            case 1:
                document.getElementById("dice1").src = "./assests/images//dice-1.png";
                break;
            case 2:
                document.getElementById("dice1").src = "./assests/images/dice-2.png";
                break;
            case 3:
                document.getElementById("dice1").src = "./assests/images/dice-3.png";
                break;
            case 4:
                document.getElementById("dice1").src = "./assests/images/dice-4.png";
                break;
            case 5:
                document.getElementById("dice1").src = "./assests/images/dice-5.png";
                break;
            case 6:
                document.getElementById("dice1").src = "./assests/images/dice-6.png";
                break;
            default:
                document.getElementById("dice1").src = "./assests/images/dice-2.png";
                break;
        }
    }
    score1 = score1 + rand1;
    if (score1 > 50 || rand1 == 6) {
        document.getElementById("rollPlayer2").disabled = false;
        document.getElementById("rollPlayer1").disabled = true;
        score1 -= rand1;
        return;
    } else if (score1 == 50) {
        p1Score.innerHTML = score1;
        win = 1;
        setTimeout(winAnnounce(),500);
    } else {
        p1Score.innerHTML = score1;
    }

}


function rollDice2() {
    var rand = 0;
    for (let j = 0; j < 20; j++) {
        rand = Math.floor(Math.random() * 6) + 1;
        switch (rand) {
            case 1:
                document.getElementById("dice2").src = "./assests/images/dice-1.png";
                break;
            case 2:
                document.getElementById("dice2").src = "./assests/images/dice-2.png";
                break;
            case 3:
                document.getElementById("dice2").src = "./assests/images/dice-3.png";
                break;
            case 4:
                document.getElementById("dice2").src = "./assests/images/dice-4.png";
                break;
            case 5:
                document.getElementById("dice2").src = "./assests/images/dice-5.png";
                break;
            case 6:
                document.getElementById("dice2").src = "./assests/images/dice-6.png";
                break;
            default:
                document.getElementById("dice2").src = "./assests/images/dice-2.png";
                break;
        }
    }
    score2 = score2 + rand;
    if (score2 > 50 || rand == 6) {
        document.getElementById("rollPlayer1").disabled = false;
        document.getElementById("rollPlayer2").disabled = true;
        score2 -= rand;
        return;
    } else if (score2 == 50) {
        p2Score.innerHTML = score2;
        win = 2;
        setTimeout(winAnnounce(),500);
    } else {
        p2Score.innerHTML = score2;
    }

}

function winAnnounce() {
    if (win == 1) {
        var p1 = document.getElementById("player1Name");
        window.alert(p1.value + " Wins");
        setTimeout(window.location.reload(), 5000);
    }

    if (win == 2) {
        var p2 = document.getElementById("player2Name");
        window.alert(p2.value + " Wins");
        setTimeout(window.location.reload(), 5000);
    }
}