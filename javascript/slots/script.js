const lowStakes = ["🍒", "🍋", "🍉", "⭐", "💰"];
const highStakes = ["💰", "⭕", "💥", "💯", "⚜️"]

const lowPayouts = {
    "🍒🍒🍒": 3,
    "🍋🍋🍋": 4,
    "🍉🍉🍉": 5,
    "⭐⭐⭐": 10,
    "💰💰💰": 20
};
const highPayouts = {
    "💰💰💰": 20,
    "⭕⭕⭕": 40,
    "💥💥💥": 50,
    "💯💯💯": 100,
    "⚜️⚜️⚜️": 200
};

let balance = 200;

function pullSlots(symbols) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = [
                symbols[Math.floor(Math.random() * symbols.length)],
                symbols[Math.floor(Math.random() * symbols.length)],
                symbols[Math.floor(Math.random() * symbols.length)]
            ];
            resolve(results);
        }, 2000);
    });
}

async function playGame(stakes, payout) {
    while (balance > 0) {
        let bet = parseInt(prompt(`Your starting balance is $${balance}\nEnter your bet: `), 10);
        if (isNaN(bet) || bet <= 0 || bet > balance) {
            alert("Sorry mate, you need to enter a number within your balance.");
            continue;
        }

        alert('Now spinning slots...')

        const result = await pullSlots(stakes);
        const resultStr = result.join('');

        alert(`Result: ${result.join(' ')}`);

        let winnings = 0;
        if (payout[resultStr]) {
            winnings = bet * payouts[resultString];
            alert(`Awesome! You won $${winnings}!`)
            balance += winnings;
        } else {
            alert(`Womp womp. Sorry, but you lost $${bet}.`)
            balance -= bet;
        }

        if (balance > 0) {
            let playAgain = confirm(`Your balance is currently $${balance}. Fancy another spin?`);
            if (!playAgain) {
                alert(`Alright then, you've cashed out with $${balance}. \nThanks for playing, and please come again!`);
                break;
            } 
        } else {
            alert("Well would you look at that, it looks like you're out of money!\nIt's GAME OVER for now!");
        }
    }
}

function slotMachine() {
    alert("Hello, and welcome to the AJS Casino, the one and only place to play slots (and nothing else)!");
    let highLow = confirm("Click 'OK' to play our High-Stakes version, or just 'Cancel' to play Low-Stakes.");
    if (highLow) {
        playGame(highStakes, highPayouts);
    } else {
        playGame(lowStakes, lowPayouts);
    }
}

slotMachine();