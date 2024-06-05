class Blackjack{
    private deck : Deck;
    private player : Player;
    private dealer : Dealer;
    private view : View;

    constructor(){
        this.deck = new Deck();
        this.player = new Player(this.deck);
        this.dealer = new Dealer(this.deck);
        this.view = new View(this);
    }
}