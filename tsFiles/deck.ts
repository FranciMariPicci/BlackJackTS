import Card from "./card.js";

export default class Deck{
    private cards : Array<Card>;

    constructor(){
        this.cards = [];
        ['spades', 'hearts', 'diamonds', 'clubs'].forEach( s =>
            ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'].forEach(
                n => this.cards.push(new Card(s, n))
            )
        );
    }

    shuffle(){
        let m : number = this.cards.length;
        let i;

        while(m){
            i = Math.floor(Math.random() * m--);
            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }
    }

    isEmpty(){
        return this.cards.length == 0;
    }
    
    mustReshuffle(){
        if(this.cards.length < 17){
            return true;
        }
      }

      draw(){
        //fa il controllo sul mazzo se è vuoto
        if(this.isEmpty()){
            throw new Error("No more cards");
        }
        //shift toglie e torna il primo elemento dell'array
        //pop invece l'ultimo
        return this.cards.shift();
    }

    
}