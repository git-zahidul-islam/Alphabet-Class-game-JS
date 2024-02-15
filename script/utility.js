// hide element by id
function hideElementByIdd(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}
// add element by id
function showElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden')
}

// add color in alphabet
function addBackgroundColor(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('bg-amber-400');
}
function removeBackgroundColor(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('bg-amber-400');
}

// get random alphabet
function getARandomAlphabet() {
    // create alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')

    // 0 - 25 random number generate 
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);

    const alphabet = alphabets[index];
    return alphabet;
}
// 
function getTextElementValueById(elementID) {
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementID, value) {
    const element = document.getElementById(elementID)
    element.innerText = value;
}
// game over 
function gameOver() {
    hideElementByIdd('play-ground');
    showElementById('final-score')
    // score update
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // const currentAlphabet = getElementTextById('display-show')
    // console.log(currentAlphabet)
    // return currentAlphabet;
    const currentAlphabet = getElementTextById('display-show')
    // console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}
// 
function getElementTextById(elementID) {
    const element = document.getElementById(elementID);
    const text = element.innerText
    return text;
}