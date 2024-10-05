const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = generateInitialCharacters();
    
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
}

function generateInitialCharacters() {
    return (
        upperCase[Math.floor(Math.random() * upperCase.length)] +
        lowerCase[Math.floor(Math.random() * lowerCase.length)] +
        number[Math.floor(Math.random() * number.length)] +
        symbol[Math.floor(Math.random() * symbol.length)]
    );
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}
