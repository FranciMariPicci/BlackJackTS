import Card from "./card.js";
import Deck from "./deck.js";

export default class Dealer{
    private _hand : Array<Card>;

    constructor(private _deck : Deck){
        this._deck.shuffle();
        this._hand = [];
    }

    draw(){
        this._hand.push(this._deck.draw()!);
    }

    drawInitialHand(){
        this.draw();
        this.draw();
    }

    emptyHand(){
        this._hand =  [];
    }

    getScore(){
        let score = 0;
        let numAces = 0;
        this._hand.forEach(element => {
            if(element.isAce()){
                numAces++;
            }else{
                score += element.score;
            }
        });
        if(numAces == 0){
            return score;
        }
        if(score + 11 + (numAces - 1) <= 21){
            return score + 11 + (numAces - 1);
        }
        return score + numAces;
    }

    getLastCard(){
        return this._hand[this._hand.length -1];
    }

    cleanHand(){
        return this._hand = [];
    }

    get hand() : Array<Card>{
        return this._hand;
    }
}