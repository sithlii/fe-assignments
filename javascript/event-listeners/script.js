//1
function generateHex(e) {
    let hexValue = '';
    const hexChars = '0123456789abcdef';
    for (let i = 0; i < e; i++) {
        hexValue += hexChars.charAt(Math.floor(Math.random()*hexChars.length));
    }

    hexValue = '#' + hexValue;

    console.log(hexValue);
}

//2
function generateJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let jokeText = `${data.joke}`;
        let jokeDisplay = document.getElementById('newJoke');
        let jokeArea = document.getElementById('jokeHistory');

        if (jokeDisplay.innerText) {
            jokeArea.value += jokeDisplay.innerText + '\n\n';
        }

        jokeDisplay.innerText = jokeText;
    })
    .catch(error => console.error("We ran into an error: ", error));
}