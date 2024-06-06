export default class View {
    constructor(_blackjack) {
        this._blackjack = _blackjack;
        this.firstDealerCard = null;
        this.dealerHand = document.querySelector('#dealerHand');
        this.playerHand = document.querySelector('#playerHand');
        this.dealerScore = document.querySelector('#dealerScore p');
        this.playerScore = document.querySelector('#playerScore p');
        this.message = document.querySelector('#message p');
        this.hit = document.querySelector('#hit');
        this.stay = document.querySelector('#stay');
        this.newGame = document.querySelector('#newGame');
        this.player = _blackjack.player;
        this.dealer = _blackjack.dealer;
        this.hit.addEventListener('click', evt => {
            this._blackjack.hit();
        });
        this.stay.addEventListener('click', evt => {
            this._blackjack.stay();
        });
    }
    addPlayerCard(card) {
        let img = new Image();
        img.src = card.image;
        img.alt = card.toString();
        this.playerHand.appendChild(img);
        this.playerScore.innerText = this.player.getScore().toString();
    }
    addDealerCard(card, show) {
        let img = new Image();
        img.src = show ? card.image : "images/cards/BACK.png";
        img.alt = card.toString();
        this.dealerHand.appendChild(img);
        if (!show) {
            this.firstDealerCard = img;
        }
        this.dealerScore.innerText = this.dealer.getScore().toString();
    }
    showMessage(text) {
        return this.message.innerText = text;
    }
    stopGame() {
        this.hit.classList.add("hidden");
        this.stay.classList.add("hidden");
        this.newGame.classList.remove("hidden");
    }
    showDealerCard(image) {
        if (this.firstDealerCard != null) {
            this.dealerScore.classList.remove("hidden");
            this.firstDealerCard.src = image;
        }
    }
    cleanTable() {
        this.dealerScore.innerHTML = '';
        this.playerScore.innerHTML = '';
        this.dealerHand.innerHTML = '';
        this.playerHand.innerHTML = '';
        this.message.innerHTML = '';
        //window.location.reload();
    }
}
//# sourceMappingURL=view.js.map