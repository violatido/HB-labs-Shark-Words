const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;


// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {
  // Replace this with your code
  // pseudo:
  // taking in a string
  // loop through the string
  for (let letter of word) {
    // for every letter in the string: 
    //       generate a div inside the section with the id = "word-container"
    //       add class = "letter-box", class = letter in word
    $('#word-container').append(`<p class="letter-box ${letter}"></p>`);
  }    
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = (alpha) => {
  // Replace this with your code
  for (char of alpha) {
    $('#letter-buttons').append(`<button>${char}</button>`)
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  $(buttonEl).attr("disabled", true);
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => {
  // Replace this with your code
  const currChar = $(`p.${letter}`);
  if (currChar[0]) {
    return true;
  }
  // return $(`div.${letter}`)[0] !== undefined
};

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  $(`.letter-box.${letter}`).append(letter);
};

// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.
//
const handleWrongGuess = () => {
  // Replace this with your code
  if (numWrong <= 4) {
    numWrong += 1;
    let sharkPhoto = $('img');
    sharkPhoto.attr('src', `/static/images/guess${numWrong}.png`);
  } else {
    $(".letter-box").attr("disabled", true);
    $("#play-again").css("display", "inline");
  }
};

//  Reset game state. Called before restarting the game.
//
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons(ALPHABET);

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
  });
})();
