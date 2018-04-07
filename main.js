console.log("YAY");

const printToDom = (stringToPrint, divID) => {
    printToThing = document.getElementById(divID);
    printToThing.innerHTML = stringToPrint;
}

const testPrint = () => {
    stringToPrint = "<h2>Adam</h2>";
    printToDom(stringToPrint, "winner-badges")
}

testPrint();