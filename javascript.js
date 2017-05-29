var wordList = ["tight","flavor","pass","navy","peasant","ridge","slump","outlook","scrap","crevice","determine","fling","texture","rub","citizen","crouch","facade","harvest","physical","bell","breeze","upset","limited","bounce","cap","sun","elaborate","herd","useful","stand","resist","clinic","alive","use","country","tycoon","terms","irony","score","ton","plant","basin","folk","root","ego","goat","stage","dry","powder","straw"];

var mysteryWord;

var pickWord = function() {
	mysteryWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(mysteryWord);
	for (var i = 0; i < mysteryWord.length; i++) {
		document.getElementById("wordBlanks").innerHTML += " _";
	}
}

var svgElements = ['<circle fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="181.032199" cy="90.062339" r="52.325901" id="head"/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="181.032199" y1="144.062339" x2="182.032199" y2="301.062339" id="torso"/>',
	' <line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="121.425061" y1="157.419516" x2="180.353635" y2="216.34809" id="left_arm"/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="180.353632" y1="159.205231" x2="239.282206" y2="218.133805" id="right_arm" transform="rotate(90 209.8179168701172,188.66950988769534) "/>'
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="122.317914" y1="302.955229" x2="181.246488" y2="361.883803" id="left_leg" transform="rotate(90 151.78219604492185,332.41952514648443) "/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="182.121835" y1="302.955229" x2="241.050409" y2="361.883803" id="right_leg"/>'
];

var wrongGuess = function(letter) {
	document.getElementById("wrongGuesses").innerHTML += " " + letter;
}

window.onload = pickWord();

document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
}