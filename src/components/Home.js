import React, { useContext, useState } from 'react';
import { Button, Col, Form, Modal, Image, Row } from 'react-bootstrap';

import { GameStateContext } from '../helpers/contexts';

function Home() {
    const { setGameState, setUserName } = useContext(GameStateContext);

    const handleChange = e => {
        // console.log(e.target.value)
        setUserName(e.target.value);
    }

    const handleSubmit = e => {
        // console.log(e);
        setGameState('quiz');
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Home'>
            <div className="leaderboard home">
                <Button
                    variant='outline-info'
                    onClick={() => setGameState('leaderboard')}
                >
                    LeaderBoard
                </Button>
            </div>

            <div className="other-games home">
                <Form.Select
                    aria-label="Default select example"
                    defaultValue={'Game Of Nerds'}
                >
                    <option>Other Games</option>
                    <option>2048</option>
                    <option>Asteroid</option>
                    <option>Game Of Nerds</option>
                    <option>Jewel Shuffle</option>
                    <option>Path Finder</option>
                    <option>Pool</option>
                    <option>Rotation</option>
                    <option>Snake</option>
                    <option>Tic Tac Toe</option>
                </Form.Select>
            </div>

            <Image
                src={require('../assets/images/gameofnerds.jpg')}
                className='unselectable'
            />

            <Form onSubmit={handleSubmit} method='post'>
                <Form.Group controlId='formName'>
                    <Form.Label>Enter Your Name:</Form.Label>
                    <Form.Control
                        type='text'
                        required
                        autoComplete='off'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    type='submit'
                    onSubmit={handleSubmit}
                    className='m-2'
                    title="How many correct answers can you get in 60 seconds? Enter your name above, then let's find out by clicking this button!!"
                >
                    Start Quiz
                </Button>
            </Form>

            <div className="updates">
                <Button
                    variant='outline-info'
                    onClick={handleShow}
                >
                    Receive Updates
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Subscribe to follow more games</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='formModalName'>
                                <Row className='mb-3'>
                                    <Col className='col-sm-3'>
                                        <Form.Label>Name:</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type='text'
                                            required
                                            autoComplete='off'
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId='formModalUseName'>
                                <Row className='mb-3'>
                                    <Col className='col-sm-3'>
                                        <Form.Label>UserName:</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type='text'
                                            required
                                            autoComplete='off'
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId='formModalEmail'>
                                <Row className='mb-3'>
                                    <Col className='col-sm-3'>
                                        <Form.Label>Email:</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type='email'
                                            required
                                            autoComplete='off'
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button
                                type='submit'
                                variant='outline-primary'
                            >
                                Subscribe
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div >
    )
}

export default Home;
