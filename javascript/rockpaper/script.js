const rps = [
    {item: "rock", value: 0},
    {item: "paper", value: 1},
    {item: "scissors", value: 2}
]

async function playGame() {
    alert("Let's play Rock, Paper, Scissors! I'll make my choice now...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    const computerItem = rps[Math.floor(Math.random() * rps.length)];

    const userChoice = prompt("Got it! Now you choose: Rock, Paper, or Scissors: ").trim().toLowerCase();
    const playerItem = rps.find(rps => rps.item === userChoice);
    
    if (!playerItem) {
        alert("Invalid option, silly! Please enter Rock, Paper, or Scissors.");
        return;
    }

    alert(`You chose: ${playerItem.item}\nComputer chose: ${computerItem.item}\nCalculating results...`)
    const result = rpsWinner(playerItem, computerItem);

    alert(`Game results: ${result}`);
}

function rpsWinner(pc, comp) {
    if (pc.value === comp.value) return "It's a tie!";
    if ((pc.value + 1) % 3 === comp.value) return "You lose!";
    return "You won!";
}

playGame();