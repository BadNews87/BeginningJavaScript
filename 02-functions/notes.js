// your notes here!
console.log("hello world!");

// greet("Semmy")
// => "Hello, Semmy";

var greet = function(name){
    return "Hello, " + name;
}

var greetingForSemmy = greet("Semmy");

var greetingForLoki = greet("Loki");

var greetingForGracie = greet('Gracie');

// console.log(greetingForSemmy);
// console.log(greetingForLoki);
// console.log(greetingForGracie);

var toCardString = function(rank, suit){
    return `${rank} of ${suit}`;
};

var aceOfSpades = toCardString("ace", "spades");
var twoOfDiamonds = toCardString("two", "diamonds");
var queenOfHearts = toCardString('queen', "hearts");

// console.log(aceOfSpades, '\n'+queenOfHearts, '\n'+twoOfDiamonds);

// makeHtmlParagraph("hello")
// => <p>hello</p>

var makeHtmlParagraph = function(content){
    return "<p>" + content + "</p>";
};

var greetingParagraph = makeHtmlParagraph(greetingForGracie);

// ES6 style function
var makeHtmlElement = (tag, content) => `<${tag}>${content}</${tag}>`;

console.log(greetingParagraph);
console.log(makeHtmlElement("div", aceOfSpades));