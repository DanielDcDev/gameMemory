const grid = document.querySelector('.grid');
const characters = [
    'yamamoto',
    'Aizen',
    'Grimmjow',
    'Sado',
    'Byakuya',
    'Ichigo',
    'Zaraki',
    'Urahara',
    'Rukya',
    'Ulquiorra',
    'Yoruichi',
    'Unohana',
]


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    
    return element;
  }
const revealCard = ({target}) => {
    
}


const createCard = (character) => {

    const card = createElement('div', 'card');
    const frontCard = createElement('div', 'face frontCard');
    const backCard = createElement('div', 'face backCard');
    frontCard.style.backgroundImage = `url('/image/${character}.png')`;

    card.appendChild(frontCard);
    card.appendChild(backCard);
    
    card.addEventListener('click', revealCard);
    return card;

}
const loadGame = () => {
    const duplicateCharacters = [
        ...characters, ...characters
    ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5 );

    duplicateCharacters.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
        

    });
}

loadGame();