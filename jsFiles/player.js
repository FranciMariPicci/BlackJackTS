export default class Player {
    constructor(_deck) {
        this._deck = _deck;
        this._hand = [];
    }
    draw() {
        this._hand.push(this._deck.draw());
    }
    drawInitialHand() {
        this.draw();
        this.draw();
    }
    getScore() {
        let score = 0;
        let numAces = 0;
        this._hand.forEach(c => {
            if (c.isAce()) {
                numAces++;
            }
            else {
                score += c.score;
            }
        });
        if (numAces == 0) {
            return score;
        }
        if (score + 11 + (numAces - 1) <= 21) {
            return score + 11 + (numAces - 1);
        }
        return score + numAces;
    }
    getLastCard() {
        return this._hand[this._hand.length - 1];
    }
    get hand() {
        return this._hand;
    }
}
//# sourceMappingURL=player.js.map