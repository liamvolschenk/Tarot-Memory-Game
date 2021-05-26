import React, { useState } from 'react';

//Bootstrap components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//this is the component for a help button which when clicked gives the player some info and rules about the game, I have used a bootstrap modal for this
function HelpButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="help" onClick={handleShow}>
                HELP
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: 'Pixel' }} >Game Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a simple but fun memory card game. All you need to do is match all of the corresponding tarot cards to win! <br /><br />
                There are 9 matches that you need to make, have fun and challenge your friends to see who can match all of the cards the fastest.
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ fontFamily: 'Pixel' }} variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HelpButton;