// your notes here!
console.log("hello world!");

var celsiusToFahrenheit = function (celsiusValue) {
    return (celsiusValue * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(0));


var burritoTotalPrice = function (price, taxRate) {
    var taxAmount = price * taxRate;
    var total = price + taxAmount;
    return Math.round(total * 100) / 100;
};

console.log(burritoTotalPrice(5.99, 0.09));


var tweet = "Hey my name is Slim Shady";

var lastThreeCapitalized = function (text) {
    return text.slice(text.length - 3).toUpperCase();
};

console.log(lastThreeCapitalized(tweet));