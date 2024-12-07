//1
const friends  = ["Mango","Poly","Kiwi","Ajax"];
let string = "";
// for(let i = 0; i < friends.length; i++){
//     string += friends[i];
//     string += ",";
// } 
string = friends.join(",");
console.log(string);
//2
const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
];
console.log(cards);
//3
const cardToRemove = "Карточка-3";
const indexCard = cards.indexOf(cardToRemove);
console.log(cards.splice(indexCard, 1));
console.log(cards);
//4
const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards);
//5
const cardToUpdate = "Карточка-4";
const indexCards = cards.indexOf(cardToInsert);
console.log(indexCards);
cards.splice(indexCards,1 , cardToUpdate);
console.log(cards);