import Blackjack from "./blackjack.js";
import Card from "./card.js";
import Dealer from "./dealer.js";
import Player from "./player.js";

export default class View{
    private player : Player;
    private dealer : Dealer;
    private firstDealerCard : HTMLImageElement | null = null;
    private dealerHand : HTMLElement = document.querySelector('#dealerHand')!;
    private playerHand : HTMLElement = document.querySelector('#playerHand')!;
    private dealerScore : HTMLElement = document.querySelector('#dealerScore p')!;
    private playerScore : HTMLElement = document.querySelector('#playerScore p')!;
    private message : HTMLElement = document.querySelector('#message p')!;
    private hit : HTMLButtonElement = document.querySelector('#hit')!;
    private stay : HTMLButtonElement = document.querySelector('#stay')!;

    constructor (private _blackjack : Blackjack){
        this.player = _blackjack.player;
        this.dealer = _blackjack.dealer;
        this.hit.addEventListener('click', evt =>{
            this._blackjack.hit();
        });
        this.stay.addEventListener('click', evt =>{
            this._blackjack.stay();
        });
    }

    addPlayerCard(card : Card){
        let img = new Image();
        img.src = card.image;
        img.alt = card.toString();
        this.playerHand.appendChild(img);
        this.playerScore.innerText = this.player.getScore().toString();
    }

    addDealerCard(card : Card, show : boolean){
        let img = new Image();
        img.src = show ? card.image : "images/cards/BACK.png";
        img.alt = card.toString();
        this.dealerHand.appendChild(img);

        if(!show){
            this.firstDealerCard = img;
        }
        
        this.dealerScore.innerText = this.dealer.getScore().toString();
    }

    showMessage(text : string){
        return this.message.innerText = text;
    }

    stopGame(){
        this.hit.disabled = true;
        this.stay.disabled = true;
    }

    showDealerCard(image : string){
        if(this.firstDealerCard != null){
            this.dealerScore.classList.remove("hidden");
            this.firstDealerCard.src = image;
        }
    }

}