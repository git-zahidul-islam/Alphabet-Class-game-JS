/* oneck code 
function play() {
    // step 1 : get home section use id & hidden the home screen add() hidden class
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden')
    // showing playground screen
    const playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden')
    console.log(playGround.classList)
};
*/
// game continue 
// 
function handelKeyboardKeyupEvents(event) {
    const playerPressedShow = event.key;
    const playerPressed = playerPressedShow.toLocaleLowerCase()

    // display show expected word
    const displayShow = document.getElementById('display-show');
    const expectedAlphabetShow = displayShow.innerText
    const expectedAlphabet = expectedAlphabetShow.toLocaleLowerCase()

    // compare the code 
    if (playerPressed === expectedAlphabet) {
        // current score get from score span 
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // increase score using 1+ 
        const newScore = currentScore + 1;
        // display score
        currentScoreElement.innerText = newScore;
        // restart the game 
        removeBackgroundColor(expectedAlphabet);
        continueGame()
    }
    else {
        console.log('dhur miya wrong type')
    }
}
document.addEventListener('keyup', handelKeyboardKeyupEvents)

function continueGame() {
    const alphabet = getARandomAlphabet()
    // console.log('your alphabet', alphabet);

    // show in the display
    const displayShow = document.getElementById('display-show');
    displayShow.innerText = alphabet;
    // color added
    addBackgroundColor(alphabet);
}

// much efficiency
function play() {
    hideElementByIdd('home-screen');
    showElementById('play-ground');
    continueGame();
}