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