var wordList = ["tight","flavor","pass","navy","peasant","ridge","slump","outlook","scrap","crevice","determine","fling","texture","rub","citizen","crouch","facade","harvest","physical","bell","breeze","upset","limited","bounce","cap","sun","elaborate","herd","useful","stand","resist","clinic","alive","use","country","tycoon","terms","irony","score","ton","plant","basin","folk","root","ego","goat","stage","dry","powder","straw"];

var mysteryWord;

var pickWord = function() {
	mysteryWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(mysteryWord);
	for (var i = 0; i < mysteryWord.length; i++) {
		document.getElementById("wordBlanks").innerHTML += " _";
	}
}

// wrong guess: push letter to #wrongGuesses, add svg to pic
// right guess: for all instances of letter in word (using indexOf with updating index), replace the appropriate blank in #wordBlanks

window.onload = pickWord();

document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
}