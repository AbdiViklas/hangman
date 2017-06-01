const wordList = ["tight","flavor","pass","navy","peasant","ridge","slump","outlook","scrap","crevice","determine","fling","texture","rub","citizen","crouch","facade","harvest","physical","bell","breeze","upset","limited","bounce","cap","sun","elaborate","herd","useful","stand","resist","clinic","alive","use","country","tycoon","terms","irony","score","ton","plant","basin","folk","root","ego","goat","stage","dry","powder","straw"];

const svgElements = ['<circle fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="181.032199" cy="90.062339" r="52.325901" id="head"/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="181.032199" y1="144.062339" x2="182.032199" y2="301.062339" id="torso"/>',
	' <line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="121.425061" y1="157.419516" x2="180.353635" y2="216.34809" id="left_arm"/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="180.353632" y1="159.205231" x2="239.282206" y2="218.133805" id="right_arm" transform="rotate(90 209.8179168701172,188.66950988769534) "/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="122.317914" y1="302.955229" x2="181.246488" y2="361.883803" id="left_leg" transform="rotate(90 151.78219604492185,332.41952514648443) "/>',
	'<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="182.121835" y1="302.955229" x2="241.050409" y2="361.883803" id="right_leg"/>'
];

let mysteryWord = "";
let totalRight = 0;
let totalWrong = 0;
let alreadyGuessed = [];

const pickWord = () => {
	mysteryWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(mysteryWord);
	$("#wordBlanks").html("Mystery word: "); //clear possible contents from a previous game
	for (let i = 0; i < mysteryWord.length; i++) {
		$("#wordBlanks").append(`<span id="blank${i}"> _</span>`);
	}
}

const reset = () => {
	totalRight = 0;
	totalWrong = 0;
	alreadyGuessed = [];
	pickWord();
	$("#wrongGuesses").html("Wrong guesses: ");
	$("#svg").html(`<title>Layer 1</title>
				<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="2.5" y1="404.460793" x2="123.486114" y2="404.460793" id="gallows base"/>
				<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="62.303922" y1="4.460785" x2="62.303922" y2="406.852957" id="gallows upright"/>
				<line fill="none" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="59.362741" y1="2.500001" x2="182.07208" y2="2.500001" id="gallows upright" stroke="#000000"/>
				<line fill="none" stroke="#000000" stroke-width="5" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x1="177.009807" y1="19.166668" x2="177.009807" y2="5.441177" id="rope"/>`);
}

const wrongGuess = letter => {
	totalWrong++;
	$("#wrongGuesses").append(" " + letter);
	$("#svg").append(svgElements[totalWrong - 1]);
	alreadyGuessed.push(letter);
	if (totalWrong === 6) {
		alert("You lose. The word was: " + mysteryWord);
		reset();
	}
}

const rightGuess = letter => {
	totalRight++;
	for (var i = 0; i < mysteryWord.length; i++) {
		if (mysteryWord[i] === letter) {
			$("#blank" + i).html(" " + letter);
		}
	}
	alreadyGuessed.push(letter);
	return;
}

const winCheck = () => {
	if (totalRight === mysteryWord.length) {
		alert("Yay!! You win!");
		reset();
	}
}

const guessLetter = userGuess => {
	console.log(userGuess);
	if (!(/^[a-z]$/).test(userGuess)) {
		alert("Letter keys only, please.");
		return;
	} else if (alreadyGuessed.includes(userGuess)) {
		return;
	} else if (!mysteryWord.includes(userGuess)) {
		wrongGuess(userGuess);
	} else {
		rightGuess(userGuess);
		winCheck();
	}
}

window.onload = pickWord();

document.onkeyup = function(e){
	let letter = e.key.toLowerCase();
	guessLetter(letter);
}

$(".alphaBtn").click(guessLetter(this.innerHTML));

// future: display score, have a score reset button