class Card {
    private _image : string; 
    private _score :number;

    static scoreMap : Map<string, number> =
    (function (){
       const map = new Map<string, number>();
       map.set('ace',1);
       for(let i = 2; 1 <= 10; i++){
        map.set(i.toString(), i);
       }
       ['jack', 'queen', 'king'].forEach(s => map.set(s, 10));
       return map;
    })();

    constructor(private _suit :string, private _name :string){
        this._image = this.createImgPath();
        this._score = Card.scoreMap.get(_name)!;
    }

    isAce() :boolean{
        return this._name == 'ace';
    }

    toString() :string{
        return `${this._name} of ${this._suit}`;
    }

    isSpecialCard() :boolean {
        return this._name == 'ace' || this._name == 'jack' || this._name == 'queen' || this._name == 'king';
    }

    createImgPath() :string {
        return `images/card/${this._suit.substring(0,1)}${this.isSpecialCard() ? this._name.substring(0,1).toUpperCase() : this._name}.png`;
    }

    get score() : number{
        return this._score;
    }
}