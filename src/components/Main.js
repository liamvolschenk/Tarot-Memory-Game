import React from "react";

//Components
import Game from "./Game";
import Header from "./Header";
import GameOver from "./GameOver";
import HelpButton from "./HelpButton";

//We dont want the GameOver component to show at the start of the game
class Main extends React.Component {
    state = {
        showGameOver: false,
    };

    // a function to show when the game is over and allow the user to play again
    handleGameOver = (boolean) => {
        if (boolean) {
            this.setState({ showGameOver: boolean });
        } else {
            this.setState({ showGameOver: boolean });
        }
    };

    //rendering all the components and using the state of the GameOver component to allow the user to reset the game
    render() {
        const { showGameOver } = this.state;
        return (
            <div>
                <Header />
                <HelpButton />
                <Game GameOver={this.handleGameOver} />
                <span>{showGameOver ? <GameOver newGame={this.handleGameOver} /> : null}</span>
            </div>
        );
    }
}

export default Main;
