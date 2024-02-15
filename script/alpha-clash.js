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
    console.log('player pressed',playerPressed);

    // game over 
    if (playerPressed === 'escape'){
        gameOver()
    }

    // display show expected word
    const displayShow = document.getElementById('display-show');
    const expectedAlphabetShow = displayShow.innerText
    const expectedAlphabet = expectedAlphabetShow.toLocaleLowerCase()

    // compare the code 
    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        continueGame()
        // --------------------------------
        // another systems
        // // current score get from score span 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // increase score using 1+ 
        // const newScore = currentScore + 1;
        // // display score
        // currentScoreElement.innerText = newScore;
        // // restart the game 
        removeBackgroundColor(expectedAlphabet);
        // 

        // update systems 


    }
    else {
        console.log('dhur miya wrong type')
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if (updateLife === 0) {
            gameOver()
        }

        // ----------------------
        // another system
        // // step 1: current life line 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step 2: decrease life
        // const newLife = currentLife - 1;
        // // step 3 : display the value
        // currentLifeElement.innerText = newLife;

        // update systems

    }
}
document.addEventListener('keyup', handelKeyboardKeyupEvents)

function continueGame() {
    const alphabet = getARandomAlphabet()
    // show in the display
    const displayShow = document.getElementById('display-show');
    displayShow.innerText = alphabet;
    // color added
    addBackgroundColor(alphabet);
    // removeBackgroundColor(alphabet);
}

// much efficiency
function play() {
    // hide everything 
    hideElementByIdd('home-screen');
    hideElementByIdd('final-score');
    showElementById('play-ground');
    // reset score 
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}