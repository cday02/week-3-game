# Spongebob Hangman
Week 4 homework for Rutgers Coding Bootcamp.

LIVE PREVIEW --> https://spongebob-hangman.herokuapp.com/

## Screenshots

Main | Mobile
-------------|--------
![Main Image](/readme_images/main.png?raw=true"main.png") | ![Mobile Image](/readme_images/mobile.png?raw=true"mobile.png")

Missed Guess 1 | Missed Guess 2
-------------|--------
![Missed Guess 1 Image](/readme_images/1.png?raw=true"1.png") | ![Missed Guess 2 Image](/readme_images/2.png?raw=true"2.png")

Missed Guess 3 | Missed Guess 4
-------------|--------
![Missed Guess 3 Image](/readme_images/3.png?raw=true"3.png") | ![Missed Guess 4 Image](/readme_images/4.png?raw=true"4.png")

Lose | Win
-------------|--------
![Lose Image](/readme_images/lose.png?raw=true"lose.png") | ![Win Image](/readme_images/win.png?raw=true"win.png")

## Objective
* Create a fun and interactive hangman game (or psychic game) that runs in the browser
* Dynamically update the html with JavaScript.
* Style various HTML elements with CSS.
* Push your code to Github.
* Deploy your code from Github to Heroku.

## Technologies used
- HTML
- CSS (media queries)
- JavaScript (Native)

## How to Play

1. Press any letter to make a guess
2. Try to guess the word before the guesses run out

## Built With

* Sublime Text
* Gimp

## Deployed With

* Heroku (PHP)

## Walk throughs of code

Most interesting JavaScript code (mobile device adding features)
```
// Media query to add input for mobile devices
if (window.matchMedia("(max-width: 780px) and (orientation: portrait)").matches) {
  /* the viewport is less than 640 pixels wide */
  // Add arrows, letter, and guess
  document.querySelector(".media-input").innerHTML = '<button class="left"><</button><div class="letters"></div><button class="right">></button><button class="guessLetter">Guess</button>';
  // Change directions
  document.querySelector(".green").innerHTML = "Press the arrows to change letter!";
  // Show first letter A
  document.querySelector(".letters").innerHTML = alphabet[count];
  // Move to left letter
  document.querySelector(".left").addEventListener("click", function(){
      if (count == 0) {
      count = 25;
    } else {
      count--;
    }
    document.querySelector(".letters").innerHTML = alphabet[count];
  });
  // Move to right letter
  document.querySelector(".right").addEventListener("click", function(){
      if (count == 25) {
      count = 0;
    } else {
      count++;
    }
    document.querySelector(".letters").innerHTML = alphabet[count];
  });
  // Guess letter
  document.querySelector(".guessLetter").addEventListener("click", function(){
      // Reset non-letter and already-guessed
    document.querySelector(".red").innerHTML = "";
    // Get letter from player, check if already guessed, then replace letter
    checkGuessed(document.querySelector(".letters").innerHTML);
    // Check to see if player won or lost
    checkWin();
  });
}
```

## Author

* [Matthew Bajorek](https://www.linkedin.com/in/matthewbajorek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* All the hours spent as a child watching Spongebob