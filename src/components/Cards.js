import React from "react";
import { images } from "../Images/images";

class Cards extends React.Component {
    //This onClick function stores the cards in an array 
    cards = [];
    handleClick = (event) => {
        let card = event.target;
        //if the second card matches the first one, they should stay facing up and change the "Check" value to "found"
        if (card.getAttribute("check") === "found") {
            return;
        }
        if (card !== this.cards[0]) {
            this.switch(card);
            this.cards.push(card);
        } else {
            this.switch(card);
            this.cards = [];
        }

        //if the two cards do not match, they are removed from the array and flipped over
        if (this.cards.length > 2) {
            if (!this.checkName(this.cards[0], this.cards[1])) {
                this.switch(this.cards[0]);
                this.switch(this.cards[1]);
                this.cards.shift();
                this.cards.shift();
            } else {
                this.cards.shift();
                this.cards.shift();
            }
        }

        //The back of the cards will be displayed at the start of the game.
        //if all of the cards have been flipped, and there are no elements with the className "image-back" then the game is over and the GameOver component is initiated
        let allPictures = document.getElementsByClassName("image-back");
        if (allPictures.length < 1) {
            this.props.GameOver(true);
            let reset = document.getElementsByClassName("image-front");
            for (let i = 0; i < reset.length; i++) {
                reset[i].classList.add("image-back");
                reset[i].setAttribute("check", "false");
                this.cards = [];
            }
        }
    };


    checkName = (card1, card2) => {
        if (card1.getAttribute("name") === card2.getAttribute("name")) {
            card1.setAttribute("check", "found");
            card2.setAttribute("check", "found");
            return true;
        }
        return false;
    };

    // This switch function removes the class - "image-back" when the card is clicked on and reveals the "front" of the card
    //The check value shows us if the card has been flipped, has a pair, or has not been flipped
    //The else statement will turn the card back around if it is clicked a second time
    switch = (target) => {
        if (target.getAttribute("check") === "true") {
            target.setAttribute("check", "false");
            target.classList.add("image-back");
        } else {
            target.setAttribute("check", "true");
            target.classList.remove("image-back");
        }
    };

    //I usedthe map method as well as the Math.random method below to generate the cards randomly. this changes the position of the cards for each game.
    //Each card has a unique key
    render() {
        return (
            <div className="images">
                {images
                    .sort(() => Math.random() - 0.5)
                    .map((element) => {
                        return (
                            <div
                                className="image-front image-back"
                                key={(Math.random() * 100)}
                                name={element.name}
                                style={{ background: `url(${element.pic})` }}
                                check="false"
                                onClick={this.handleClick}
                            />
                        );
                    })}
            </div>
        );
    }
}
export default Cards;
