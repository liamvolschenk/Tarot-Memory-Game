import React from "react";
import Cards from "./Cards";

//this component takes the Cards and lays them out, and includes the GameOver functionality
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Cards GameOver={this.props.GameOver} />
            </div>
        );
    }
}

export default Game;

