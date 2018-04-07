console.log("YAY");

const printToDom = (stringToPrint, divID) => {
    printToThing = document.getElementById(divID);
    printToThing.innerHTML = stringToPrint;
}



const buttonEventListeners = () => {
    let buttonToClick = document.getElementById('challenge-button');
    buttonToClick.addEventListener('click', player1XHR);
}

const comparePlayers = (player1JSON, player2JSON) => {
    let stringToPrint = "";
    stringToPrint += `<div class="player1-image col-md-4 col-md-offset-1">`;
    stringToPrint += `<img src="./img/dead-pool1.jpg" alt="">`;
    stringToPrint += `<h2>6000</h2>`;
    stringToPrint += `</div>`;
    stringToPrint += `<div class="player2-image col-md-4 col-md-offset-1">`;
    stringToPrint += `<img src="./img/dead-pool2.jpg" alt="">`;
    stringToPrint += `<h2>5000</h2>`;
    stringToPrint += `</div>`;
    printToDom(stringToPrint, "challenger-image-container");
    if(player1JSON.points.total > player2JSON.points.total){
        let secondStringToPrint = "";
        secondStringToPrint += `<div class="col-md-12">`;
        secondStringToPrint += `<h1>Deadpool Wins!!!!</h1>`;
        secondStringToPrint += `</div>`;
        secondStringToPrint += `<div class="row">`;
        secondStringToPrint += `<div id="winner-badges" class="col-md-12">`;
        player1JSON.badges.forEach((badge, index) => {
            secondStringToPrint += `<div id="badge${index}" class="player-badge">`;
            secondStringToPrint += `<img src="${badge.icon_url}">`
            secondStringToPrint += `</div>`;
        });
        secondStringToPrint += `</div>`;
        secondStringToPrint += `</div>`;
    } else {

    }
}

const WTF = () => {
    console.log("FUCK! Everything Broke!");
}

const player2XHR = (player1JSON) => {
    const player2name = document.getElementById('player2').value;
    const player2URL = `https://teamtreehouse.com/${player2name}.json`;
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', multiplePlayerStuff);
    myRequest.addEventListener('error', WTF);
    myRequest.open('GET', player2URL);
    myRequest.send();

    function multiplePlayerStuff (player1JSON) {
        player2JSON = JSON.parse(this.responseText);
        comparePlayers(player1JSON, player2JSON);
    }
}

const getPlayer1JSON = () => {
    const player1JSON = JSON.parse(this.responseText);
    player2XHR(player1JSON);
}

const player1XHR = (functionToRun) => {
    const player1name = document.getElementById('player1').value;
    const player1URL = `https://teamtreehouse.com/${player1name}.json`;
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener("load", getPlayer1JSON);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", player1URL);
    myRequest.send();
}

const startApplication = () => {
    buttonEventListeners();
}

// One click call function that sets the Player1 and Player2 ID's
// Then Calls the startApplication
startApplication();