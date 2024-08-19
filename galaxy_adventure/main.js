let cardSymbols = ["1", "2", "3", "4", "5", "6", "7", "8"];
cardSymbols = [...cardSymbols, ...cardSymbols];
cardSymbols.sort(() => 0.5 - Math.random());

let firstCard, secondCard, lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('open');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('open');
        secondCard.classList.remove('open');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

const deck = document.querySelector('.deck');
cardSymbols.forEach(symbol => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = symbol;

    let front = document.createElement('div');
    front.classList.add('front');
    front.style.backgroundImage = `url('planets/${symbol}.png')`;

    let back = document.createElement('div');
    back.classList.add('back');

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', flipCard);
    deck.appendChild(card);
});
