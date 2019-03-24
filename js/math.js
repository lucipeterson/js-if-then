alert("Let's do some math!");

numbersList = [];

function collectNumber() {
    let numberPick = prompt("Choose a number: ");
    let numberFloat = parseFloat(numberPick);
        if(numberPick === "0") {
            alert("You must enter a number above 0!");
            collectNumber();
        } else if (isNaN(numberPick) === true){
            alert("You must enter a numerical character!");
            collectNumber();
        } else {numbersList.push(numberFloat);} 
}

collectNumber();
collectNumber();

let a = numbersList[0];
let b = numbersList[1];

let message = `<h1>Math with the numbers ${a} and ${b}.</h1>` + `<br>` + 
`<p>${a} + ${b} = ${a+b}</p>` +
`<p>${a} * ${b} = ${a*b}</p>` +
`<p>${a} / ${b} = ${a/b}</p>` +
`<p>${a} - ${b} = ${a-b}</p>`;

document.write(message);