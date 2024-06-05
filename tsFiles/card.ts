export default class Card {
    private _image : string; 
    private _score :number;

    // static scoreMap : Map<string, number> = new Map<string, number>();
    //    map.set('ace',1);
    //    for(let i = 2; 1 <= 10; i++){
    //     map.set(i.toString(), i);
    //    }
    //    ['jack', 'queen', 'king'].forEach(s => map.set(s, 10));

    constructor(private _suit :string, private _name :string){
        this._image = this.createImgPath();
        if(['jack', 'queen', 'king'].includes(this._name)){
            this._score = 10;
        } else if(this._name == 'ace'){
            this._score = 1;
        } else {
            this._score = Number(this._name);
        }
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
        return `images/cards/${this._suit.substring(0,1)}${this.isSpecialCard() ? this._name.substring(0,1).toUpperCase() : this._name}.png`;
    }

    get score() : number{
        return this._score;
    }

    get image() : string{
        return this._image;
    }
}

