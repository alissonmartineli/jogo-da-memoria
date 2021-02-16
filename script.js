let cards = ['bulbasaur', 'charmander', 'squirtle', 'butterfree', 'pidgey', 'pikachu'];
cards = [...cards, ...cards];
cards.sort(() => .5 - Math.random());

const container = document.querySelector('.container');

let hasFlipedCard = false;
let disableClick = false;
let firstCard, lastCard;

cards.forEach(card => {
	const el = document.createElement('div');
	el.classList.add('card');
	el.dataset.card = card;

	const front = document.createElement('img');
	front.classList.add('card-front')
	front.src = `img/${card}.png`;

	const back = document.createElement('img');
	back.classList.add('card-back')
	back.src = 'img/pokebola.png';

	el.appendChild(front);
	el.appendChild(back);

	el.addEventListener('click', flipCard);

	container.appendChild(el);
});

function flipCard() {
	if (disableClick) {
		return;
	}

	if (this.dataset.disable) {
		return;
	}

	this.classList.add('flip');

	if (!hasFlipedCard) {
		hasFlipedCard = true;
		firstCard = this;
		return;
	}

	if (this === firstCard) {
		return;
	}

	lastCard = this;
	hasFlipedCard = false;

	checkForMatch();
}

function checkForMatch() {
	if (firstCard.dataset.card === lastCard.dataset.card) {
		disableCards();
		return;
	}

	unflipCards();
}

function disableCards() {
	firstCard.dataset.disable = true;
	lastCard.dataset.disable = true;
}

function unflipCards() {
	disableClick = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		lastCard.classList.remove('flip');
		disableClick = false;
	}, 1500)
}
