import React, { useContext, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

import { GameStateContext } from '../helpers/contexts';

function Results() {
    const { list, setGameState, score, setScore, setStop, userName } = useContext(GameStateContext);

    const resetData = () => {
        setScore(0);
        setStop(false);
    }

    const checkMainMenu = () => {
        resetData();
        setGameState('home');
    }

    const checkLeaderBoard = () => {
        resetData();
        setGameState('leaderboard');
    }

    useEffect(() => {
        let lists = JSON.parse(localStorage.getItem('lists'));

        if (lists === undefined) {
            localStorage.setItem('lists', JSON.stringify([]));
        } else {
            list.push({ name: userName, score: score });

            list.sort((prev, curr) => {
                return curr.score - prev.score
            })

            localStorage.setItem('lists', JSON.stringify(list));
        }
    })

    return (
        <div className='Results'>
            <Button
                variant='outline-info'
                onClick={() => checkMainMenu()}
                className='main-menu leaderboard'
            >
                Main Menu
            </Button>

            <div className="leaderboard home">
                <Button
                    variant='outline-info'
                    onClick={() => checkLeaderBoard()}
                >
                    LeaderBoard
                </Button>
            </div>
            <Container>
                <h1>Results</h1>
                <h2>Congratulations, {userName}! You got {score} correct answers !</h2>
            </Container>
        </div>
    )
}

export default Results;
