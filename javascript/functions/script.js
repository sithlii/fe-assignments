//1
function longestWord(words) {
    let longWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longWord.length) {
            longWord = words[i];
        }
    }
    return longWord;
}