window.onload = function() {
	var userGuess;
	var words = ["SPONGEBOB","PATRICK","SANDY","SQUIDWARD","GARY","PLANKTON"];
	var word = [];
	var positions = [];
	var guessedLetters = [];
	var guesses;
	var wins;

	// Set inital wins
	wins = 0;
	document.querySelector(".wins").innerHTML = wins;
	// Select the first word
	var num = 0;
	newWord(num);
	

	function newWord(num) {
		// Set initial guesses
		guesses = 5;
		document.querySelector(".guesses").innerHTML = guesses;
		// Show hangman
		document.querySelector(".hangman").innerHTML = '<img src="assets/images/hangman' + guesses + '.png">';
		// Clear positions and guesses
		positions = [];
		guessedLetters = [];
		document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		// Set positions of intial word and display
		word = words[num].split("");
		for (var i=0; i<word.length; i++) {
			positions.push("_");
		}
		document.querySelector(".positions").innerHTML = positions.join(" ");

		// Listen for keystrokes
		document.onkeyup = function(event) {
			// Reset non-letter and already-guessed
			document.querySelector(".red").innerHTML = "";
			// Get letter from player, check if already guessed, then replace letter
			if (event.keyCode >= 65 && event.keyCode <= 90) {
				userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				checkGuessed(userGuess);
			} else {
				document.querySelector(".red").innerHTML = "Please press a letter";
			}
			// Check to see if player won or lost
			checkWin();
		}
	}

	function checkGuessed(userGuess) {
		// Check to see if letter matches any letters in word
		check: {
			for (var i=0; i<guessedLetters.length; i++) {
				if (guessedLetters[i] == userGuess) {
					document.querySelector(".red").innerHTML = "You already guessed this letter";
					break check;
				}
			}
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == userGuess) {
					document.querySelector(".red").innerHTML = "You already guessed this letter";
					break check;
				}
			}
			replacements(userGuess);
		}
	}

	function replacements(userGuess) {
		// Check to see if letter matches any letters in word
		var replacements = 0;
		for (var i=0; i<word.length; i++) {
			if (word[i] == userGuess) {
				positions[i] = word[i];
				replacements++;
			}
		}
		if (replacements == 0) {
			// If no replacements reduce guesses
			guesses--;
			document.querySelector(".guesses").innerHTML = guesses;
			document.querySelector(".hangman").innerHTML = '<img src="assets/images/hangman' + guesses + '.png">';
			// Push and display guessed letters
			guessedLetters.push(userGuess);
			document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		} else {
			// Redisplay positions
			document.querySelector(".positions").innerHTML = positions.join(" ");
		}
	}

	function checkWin() {
		// Check if all underscores are replaced
		winning: {
			for (var i=0; i<positions.length; i++) {
				if (positions[i] == "_") {
					break winning;
				}
			}
			// Update and display wins
			wins++;
			document.querySelector(".wins").innerHTML = wins;
			// Show answer
			answer("C");
		}
		// Check if guess reaches 0
		if (guesses == 0) {
			answer("Inc");
		}
	}

	function selectNewWord() {
		num++;
		// Keep selecting new words when available
		if (num < words.length) {
			// Select new word
			newWord(num);
		} else {
			// Reset num
			num = 0;
			newWord(num);
		}
	}

	function answer(letter) {
		// Hide instructions
		document.querySelector(".green").style.visibility = "hidden";
		document.querySelector(".blue").style.visibility = "hidden";
		document.querySelector(".wins").style.visibility = "hidden";
		document.querySelector(".yellow").style.visibility = "hidden";
		document.querySelector(".positions").style.visibility = "hidden";
		document.querySelector(".brown").style.visibility = "hidden";
		document.querySelector(".guesses").style.visibility = "hidden";
		document.querySelector(".pink").style.visibility = "hidden";
		document.querySelector(".letters-guessed").style.visibility = "hidden";
		// Show answer
		document.querySelector(".response").innerHTML = letter + "orrect! Its " + words[num] + "!";
		document.querySelector(".character").innerHTML = '<img src="assets/images/' + words[num] + '.png">';
		document.querySelector(".anykey").innerHTML = "Press any key to continue";
		// Any key restarts game
		document.onkeyup = function(event) {
			// Reset answer
			document.querySelector(".response").innerHTML = "";
			document.querySelector(".character").innerHTML = "";
			document.querySelector(".anykey").innerHTML = "";
			// Show instructions
			document.querySelector(".green").style.visibility = "visible";
			document.querySelector(".blue").style.visibility = "visible";
			document.querySelector(".wins").style.visibility = "visible";
			document.querySelector(".yellow").style.visibility = "visible";
			document.querySelector(".positions").style.visibility = "visible";
			document.querySelector(".brown").style.visibility = "visible";
			document.querySelector(".guesses").style.visibility = "visible";
			document.querySelector(".pink").style.visibility = "visible";
			document.querySelector(".letters-guessed").style.visibility = "visible";
			// Select new word
			selectNewWord();
		}
	}

	// Media query to add input for mobile devices
	var mq = window.matchMedia('@media all and (max-width: 640px)');
	if(mq.matches) {
	    // the width of browser is more then 640px
	} else {
	    // the width of browser is less then 640px
	    document.querySelector(".media-input").innerHTML = '<input type="text">';
	}

}