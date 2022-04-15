alert("Welcome to the banking system of tomarrow.");
const userInput = prompt("Please enter '1' for deposit or '2' for withdraw");
var bal = 0;
if (userInput == "1") { // depo
    var bal =+ prompt("How much would you like to deposit?");
}
else if (userInput == "2") { //
    var bal =- prompt("How much would you like to withdraw?");
};

alert(`Your balance is ${bal}`)
if (bal > 0) {
    alert("You got monnneeeyy!!")
}
else if (bal < 0) {
    alert("Low funds")
}