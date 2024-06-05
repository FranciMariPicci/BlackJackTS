export default class Card {
    // static scoreMap : Map<string, number> = new Map<string, number>();
    //    map.set('ace',1);
    //    for(let i = 2; 1 <= 10; i++){
    //     map.set(i.toString(), i);
    //    }
    //    ['jack', 'queen', 'king'].forEach(s => map.set(s, 10));
    constructor(_suit, _name) {
        this._suit = _suit;
        this._name = _name;
        this._image = this.createImgPath();
        if (['jack', 'queen', 'king'].includes(this._name)) {
            this._score = 10;
        }
        else if (this._name == 'ace') {
            this._score = 1;
        }
        else {
            this._score = Number(this._name);
        }
    }
    isAce() {
        return this._name == 'ace';
    }
    toString() {
        return `${this._name} of ${this._suit}`;
    }
    isSpecialCard() {
        return this._name == 'ace' || this._name == 'jack' || this._name == 'queen' || this._name == 'king';
    }
    createImgPath() {
        return `images/cards/${this._suit.substring(0, 1)}${this.isSpecialCard() ? this._name.substring(0, 1).toUpperCase() : this._name}.png`;
    }
    get score() {
        return this._score;
    }
    get image() {
        return this._image;
    }
}
//# sourceMappingURL=card.js.map