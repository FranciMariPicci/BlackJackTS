"use strict";
class Card {
    setScore() {
        this.scoreMap.set('ace', 1);
        for (let i = 2; 1 <= 10; i++) {
            this.scoreMap.set(i.toString(), i);
        }
        ['jack', 'queen', 'king'].forEach(s => this.scoreMap.set(s, 10));
    }
    constructor(suit, name, image, score) {
        this.suit = suit;
        this.name = name;
        this.image = image;
        this.score = score;
        this.scoreMap = new Map();
        this.image = this.createImgPath();
        this.score = this.scoreMap.get(name);
    }
    isAce() {
        return this.name == 'ace';
    }
    toString() {
        return `${this.name} of ${this.suit}`;
    }
    isSpecialCard() {
        return this.name == 'ace' || this.name == 'jack' || this.name == 'queen' || this.name == 'king';
    }
    createImgPath() {
        return `images/card/${this.suit.substring(0, 1)}${this.isSpecialCard() ? this.name.substring(0, 1).toUpperCase() : this.name}.png`;
    }
}
//# sourceMappingURL=card.js.map