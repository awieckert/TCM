console.log("YAY");

const printToDom = (stringToPrint, divID) => {
    printToThing = document.getElementById(divID);
    printToThing.innerHTML = stringToPrint;
}



const buttonEventListeners = () => {
    let buttonToClick = document.getElementById('challenge-button');
    console.log("Button Selected: ", buttonToClick);
    buttonToClick.addEventListener('click', player1XHR);
}

const comparePlayers = (player1JSON, player2JSON) => {
    console.log("PLayer1JSON: ", player1JSON);
    console.log('player2JSON: ', player2JSON);
    let stringToPrint = "";
    let secondStringToPrint = "";
    let thirdStringToPrint = "";
    stringToPrint += `<div class="player1-image col-md-4 col-md-offset-2">`;
    stringToPrint += `<img src="${player1JSON.gravatar_url}" alt="">`;
    stringToPrint += `<h2>${player1JSON.points.total}</h2>`;
    stringToPrint += `</div>`;
    stringToPrint += `<div class="player2-image col-md-4 col-md-offset-2">`;
    stringToPrint += `<img src="${player2JSON.gravatar_url}" alt="">`;
    stringToPrint += `<h2>${player2JSON.points.total}</h2>`;
    stringToPrint += `</div>`;
    printToDom(stringToPrint, "challenger-image-container");
    if(player1JSON.points.total > player2JSON.points.total){
        secondStringToPrint += `<div class="col-md-12">`;
        secondStringToPrint += `<h1>${player1JSON.name} Wins!!!!</h1>`;
        secondStringToPrint += `</div>`;
        secondStringToPrint += `<div class="row">`;
        secondStringToPrint += `<div id="winner-badges" class="col-md-12">`;
        player1JSON.badges.forEach((badge, index) => {
            thirdStringToPrint += `<div id="badge${index}" class="col-md-1 player-badge awesome-animation spin">`;
            thirdStringToPrint += `<img src="${badge.icon_url}">`
            thirdStringToPrint += `</div>`;
        });
        secondStringToPrint += `</div>`;
        secondStringToPrint += `</div>`;
        printToDom(secondStringToPrint, "winner");
        printToDom(thirdStringToPrint, "winner-badges");
    } else {
        let secondStringToPrint = "";
        secondStringToPrint += `<div class="col-md-12">`;
        secondStringToPrint += `<h1>${player2JSON.name} Wins!!!!</h1>`;
        secondStringToPrint += `</div>`;
        secondStringToPrint += `<div class="row">`;
        secondStringToPrint += `<div id="winner-badges" class="col-md-12">`;
        player2JSON.badges.forEach((badge, index) => {
            thirdStringToPrint += `<div id="badge${index}" class="col-md-1 player-badge awesome-animation spin">`;
            thirdStringToPrint += `<img src="${badge.icon_url}">`
            thirdStringToPrint += `</div>`;
        });
        secondStringToPrint += `</div>`;
        secondStringToPrint += `</div>`;
        printToDom(secondStringToPrint, "winner");
        printToDom(thirdStringToPrint, "winner-badges");
    }
}

function WTF () {
    console.log("FUCK! Everything Broke!");
}

const player2XHR = (player1data) => {
    const player2name = document.getElementById('player2').value;
    console.log("Player 2 input: ", player2name);
    const player2URL = `https://teamtreehouse.com/${player2name}.json`;
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', multiplePlayerStuff);
    myRequest.addEventListener('error', WTF);
    myRequest.open('GET', player2URL);
    myRequest.send();

    function multiplePlayerStuff () {
        let player2JSON = JSON.parse(this.responseText);
        // let players1JSON = player1Stuff;
        comparePlayers(player1data, player2JSON);
    }
}

function getPlayer1JSON () {
    const player1JSON = JSON.parse(this.responseText);
    console.log(player1JSON);
    player2XHR(player1JSON);
}

const player1XHR = () => {
    const player1name = document.getElementById('player1').value;
    console.log("Player 1 input: ", player1name);
    const player1URL = `https://teamtreehouse.com/${player1name}.json`;
    console.log("player1URL: ", player1URL);
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