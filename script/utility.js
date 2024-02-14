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

