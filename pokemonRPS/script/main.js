const choices = document.querySelectorAll(".nChoice");
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modalT');
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game Function
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner);
    showWinner(winner, computerChoice);
}

//get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'char';
    }
    else if (rand <= 0.67) {
        return 'blast';
    }
    else {
        return 'venus';
    }
}

//get Game Winner
function getWinner(p, c) {
    if (p == c) {
        return 'draw';
    }
    else if (p === "char") {
        if (c === 'blast') {
            return 'computer'
        }
        else if (c === 'venus') {
            return 'player'
        }
    }
    else if (p === 'blast') {
        if (c === 'venus') {
            return 'computer'
        }
        else if (c === 'char') {
            return 'player'
        }
    }
    else if (p === 'venus') {
        if (c === 'char') {
            return 'computer'
        }
        else if (c === 'blast') {
            return 'player'
        }
    }
}

function showWinner(winner, computerChoice) {;
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `<h1 class="text-win">You Win!</h1><p>Computer Chose</p><img src="img/${computerChoice}.png" height="200" />`;
    }
    else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `<h1 class="text-lose">You Lost</h1><p>Computer Chose</p><img src="img/${computerChoice}.png" height="200" />`;
    }

    else if (winner === 'draw') {
        result.innerHTML = `<h1>It's a Draw</h1><p>Computer Also Chose</p><img src="img/${computerChoice}.png" height="200" />`;
    }
    score.innerHTML = `<div class="col text-center pScore"><p class="scoreSize">Player: ${scoreboard.player}</p></div><div class="col text-center cScore"><p class="scoreSize">Computer: ${scoreboard.computer}</p></div>`;
    modal.style.display = 'block';
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

//Event listeners
choices.forEach(nChoice => nChoice.addEventListener('click', play));
window.addEventListener('click', clearModal)
$("#restart").on('click', function () {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<div class="col text-center pScore"><p class="scoreSize">Player: 0</p></div><div class="col text-center cScore"><p class="scoreSize">Computer: 0</p></div>`;
})
