import Blackjack from "./blackjack.js";

let newGame : HTMLButtonElement = document.querySelector('#newGame')!;
let hit : HTMLButtonElement = document.querySelector('#hit')!;
let stay : HTMLButtonElement = document.querySelector('#stay')!;

let bj = new Blackjack();

newGame.addEventListener('click', evt =>{
    console.log("inizio gioco");
    bj.newGame();
    newGame.classList.add("hidden");
    hit.classList.remove("hidden");
    stay.classList.remove("hidden");
});



/*
implementare il gioco con un button iniziale START GAME e che poi verrà riproposto quando la mano è vinta o persa
poi rendere il gioco più iteressante con l'animazione o il girare la carta in modo più lento
*/