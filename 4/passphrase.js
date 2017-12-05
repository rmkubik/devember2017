const fs = require('fs');

const passphrases = fs.readFileSync('passphrases.txt', 'utf-8');

const isPassphraseValid = (passphrase) => {
    const words = new Set();
    for (word of passphrase.split(' ')) {
        if (words.has(word)) {
            return false;
        } else {
            words.add(word);
        }
    }
    return true;
}

const validPassPhrases = passphrases.split('\n').filter((passphrase) => {
    return isPassphraseValid(passphrase.trim());
});

const isPassphraseValid2 = (passphrase) => {
    const words = new Set();
    for (word of passphrase.split(' ')) {
        if (words.has(word.split('').sort().join(''))) {
            return false;
        } else {
            words.add(word.split('').sort().join(''));
        }
    }
    return true;
}

const validPassPhrases2 = passphrases.split('\n').filter((passphrase) => {
    return isPassphraseValid2(passphrase.trim());
});

console.log(validPassPhrases.length);
console.log(validPassPhrases2.length);