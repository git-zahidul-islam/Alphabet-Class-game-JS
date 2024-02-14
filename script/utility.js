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
// add color in alphabet
function addBackgroundColor (elementID){
    const element = document.getElementById(elementID)
    element.classList.add('bg-amber-400');
}