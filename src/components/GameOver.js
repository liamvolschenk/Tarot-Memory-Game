import React from "react";

//Bootstrap component
import Button from 'react-bootstrap/Button';


//this component changes the state of the game back to the beginning,allowing the user to start over.
class GameOver extends React.Component {
    handleClick = () => {
        this.props.newGame(false);
    };
    render() {
        return (
            <div className="game-over">
                <div className="message">
                    <h2>Well Done!</h2>
                    <p>How about another go?</p>
                    <br />
                    <Button variant="outline-primary" onClick={this.handleClick}>
                        Play Again
                    </Button>
                </div>
            </div>
        );
    }
}

export default GameOver;

