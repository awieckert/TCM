console.log("YAY");

let player1ID = "";
let player2ID = "";

const printToDom = (stringToPrint, divID) => {
    printToThing = document.getElementById(divID);
    printToThing.innerHTML = stringToPrint;
}

const grabPlayerIDs = () => {
    player1ID = document.getElementById('')
}

const buttonEventListeners = () => {
    let buttonToClick = document.getElementById('challenge-button');
    buttonToClick.addEventListener('click', grabPlayerIDs);
}

const comparePlayers = (player1JSON, player2JSON) => {

}

const WTF = () => {
    console.log("FUCK! Everything Broke!");
}

const player2XHR = (player1JSON) => {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', multiplePlayerShit);
    myRequest.addEventListener('error', WTF);
    myRequest.open('GET', `https://teamtreehouse.com/${player2ID}.json`);
    myRequest.send();

    function multiplePlayerShit (player1JSON) {
        player2JSON = JSON.parse(this.responseText);
        comparePlayers(player1JSON, player2JSON);
    }
}

const getPlayer1JSON = () => {
    const player1JSON = JSON.parse(this.responseText);
    player2XHR(player1JSON);
}

const genericXHRrequest = (functionToRun) => {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener("load", functionToRun);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", `https://teamtreehouse.com/${player1ID}.json`);
    myRequest.send();
}

const startApplication = (getPlayer1JSON) => {
    genericXHRrequest(getPlayer1JSON);
}

// One click call function that sets the Player1 and Player2 ID's
// Then Calls the startApplication
startApplication(getPlayer1JSON);