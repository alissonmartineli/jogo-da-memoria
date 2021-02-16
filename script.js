let cards = ['bulbasaur', 'charmander', 'squirtle', 'butterfree', 'pidgey', 'pikachu'];
cards = [...cards, ...cards];
cards.sort(() => .5 - Math.random());

const container = document.querySelector('.container');

cards.forEach(card => {
    const el = document.createElement('div');
    el.classList.add('card');

    const front = document.createElement('img');
    front.classList.add('card-front')
    front.src = 'img/pokebola.png';

    const back = document.createElement('img');
    back.classList.add('card-back')
    back.src = `img/${card}.png`;

    el.appendChild(front);
    el.appendChild(back);

    container.appendChild(el);
});
