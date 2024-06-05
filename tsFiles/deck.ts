class Deck{
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
    
}