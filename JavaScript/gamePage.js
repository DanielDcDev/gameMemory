const grid = document.querySelector('.grid');
const caracter = [
    'Baraggan',
    'Aizen',
    'Stark',
    'Grimmjow ',
    'Sado',
    'Byakuya',
    'Ichigo',
    'Zaraki',
    'Urahara',
    'Rukya',
    'Ulquiorra',
    'Yhwach',
    'yoruichi',
]


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }
const createCard = () => {

    const card = createElement('div', 'card');
    const frontCard = createElement('div', 'face frontCard');
    const backCard = createElement('div', 'face backCard');

    card.appendChild(frontCard);
    card.appendChild(backCard);

    return card;

}
const loadGame = () => {
    caracter.forEach((caracter) => {

        const card = createCard();
        grid.appendChild(card);

    });
}

createCard();