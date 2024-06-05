class Card {
    scoreMap :Map<string, number> = new Map();
    
    setScore (){
       this.scoreMap.set('ace',1);
       for(let i = 2; 1 <= 10; i++){
        this.scoreMap.set(i.toString(), i);
       }
       ['jack', 'queen', 'king'].forEach(s => this.scoreMap.set(s, 10));
    }

    constructor(private suit :string, private name :string, private image : string, private score :number|undefined){
        this.image = this.createImgPath();
        this.score = this.scoreMap.get(name);
    }

    isAce() :boolean{
        return this.name == 'ace';
    }

    toString() :string{
        return `${this.name} of ${this.suit}`;
    }

    isSpecialCard() :boolean {
        return this.name == 'ace' || this.name == 'jack' || this.name == 'queen' || this.name == 'king';
    }

    createImgPath() :string {
        return `images/card/${this.suit.substring(0,1)}${this.isSpecialCard() ? this.name.substring(0,1).toUpperCase() : this.name}.png`;
    }
}