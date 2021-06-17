let card = { suit: '하트', rank:'a'};
console.log(card.suit);
console.log(card['rank']);

card.value = 14;
console.log(card);

delete card.value;
console.log(card);

console.log('suit' in card);

let a = card;
console.log(a);
// 참조타입
console.log(a.suit);