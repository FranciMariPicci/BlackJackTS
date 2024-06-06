import Dealer from "./dealer.js";
import Player from "./player.js";
import View from "./view.js";
import Deck from "./deck.js";
export default class Blackjack {
    constructor() {
        this.deck = new Deck();
        this._player = new Player(this.deck);
        this._dealer = new Dealer(this.deck);
        this.view = new View(this);
    }
    newGame() {
        this._player.emptyHand();
        this._dealer.emptyHand();
        this.view.cleanTable();
        this._player.drawInitialHand();
        this._player.hand.forEach(c => this.view.addPlayerCard(c));
        this._dealer.drawInitialHand();
        this.view.addDealerCard(this._dealer.hand[0], false);
        this.view.addDealerCard(this._dealer.hand[1], true);
        this.checkBlackJack();
    }
    hit() {
        this._player.draw();
        this.view.addPlayerCard(this._player.getLastCard());
        if (this._player.getScore() > 21) {
            this.view.showMessage("HAI PERSO!!");
            this.view.stopGame();
        }
    }
    stay() {
        this.view.showDealerCard(this.dealer.hand[0].image);
        while (this.dealer.getScore() < 17) {
            this.dealer.draw();
            this.view.addDealerCard(this.dealer.getLastCard(), true);
        }
        this.checkWinner();
        this.view.stopGame();
    }
    checkWinner() {
        if (this.dealer.getScore() > 21) {
            this.view.showMessage("IL DEALER HA SBALLATO, HAI VINTO!");
        }
        else if (this.dealer.getScore() > this.player.getScore()) {
            this.view.showMessage("IL DEALER HA UNA MANO MIGLIORE DELLA TUA, HAI PERSO!");
        }
        else if (this.dealer.getScore() == this.player.getScore()) {
            this.view.showMessage("HAI LO STESSO PUNTEGGIO DEL DEALER, SI DIVDE!");
        }
        else {
            this.view.showMessage("HAI BATTUTO IL DEALER, HAI VINTO!");
        }
    }
    checkBlackJack() {
        if (this.player.getScore() == 21) {
            this.view.showDealerCard(this.dealer.hand[0].image);
            if (this.dealer.getScore() < 21) {
                this.view.showMessage("HAI FATTO BLACKJACK, HAI VINTO!");
            }
            else {
                this.view.showMessage("AVETE FATTO ENTRAMBI BLACKJACK, CHE CULO!");
            }
            this.view.stopGame();
        }
    }
    get player() {
        return this._player;
    }
    get dealer() {
        return this._dealer;
    }
}
//# sourceMappingURL=blackjack.js.map