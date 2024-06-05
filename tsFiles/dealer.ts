

class Dealer{
    private hand : Array<Card>;
    

    constructor(private _deck : Deck){
        this._deck.shuffle();
        this.hand = [];
    }

    draw(){
        this.hand.push(this._deck.draw()!);
    }

    drawInitialHand(){
        this.draw();
        this.draw();
    }

    getScore(){
        let score = 0;
        let numAces = 0;
        this.hand.forEach(element => {
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
}