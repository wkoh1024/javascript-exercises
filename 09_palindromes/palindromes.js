const palindromes = function (word) {
    // matches all non word characters
    // which means letters, numbers, and underscores (would fail if underscores used)
    const regex = /\W/g;
    strippedWord = word.replace(regex, '');
    // converts string to array, reverses, and joins back
    let reversedStrippedWord = strippedWord.split("").reverse().join("");
    return strippedWord.toLowerCase() === reversedStrippedWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
