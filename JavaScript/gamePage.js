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
let firstCard = '';
let secondCard = '';

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    
    return element;
  }

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabledCard');
    if(disabledCards == 20){
        alert('Parabéns, você conseguiu!!!!');
    }
  }
const checkedCards = ({})=> {
 const firstCard = firstCard.getAttribute('data-character');
 const secondCard = secondCard.getAttribute('data-character');

 if(firstCard == secondCard){
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();
 }else {
    setTimeout(() => {
    firstCard.classList.remove('reveal-card');
    secondCard.classList.remove('reveal-card');

    firstCard = '';
    secondCard = '';
}, 500) 
}
}
const revealCard = ({target}) => {
if(target.parentNode.className.includes['revealCard']){
    return;
}
if (firstCard == ''){
    target.parentNode.classList.add('revealCard');
    firstCard = target.parentNode;
}else if(secondCard ==''){
    target.parentNode.classList.add('revealCard');
    secondCard = target.parentNode;
}
    
}


const createCard = (character) => {

    const card = createElement('div', 'card');
    const frontCard = createElement('div', 'face frontCard');
    const backCard = createElement('div', 'face backCard');
    frontCard.style.backgroundImage = `url('/image/${character}.png')`;

    card.appendChild(frontCard);
    card.appendChild(backCard);
    
    card.addEventListener('click', revealCard);
    card.settAtribute('data-character', character)
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