import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { GameStateContext } from '../helpers/contexts';

function LeaderBoard() {
    const { setGameState, setScore, setStop } = useContext(GameStateContext);
    const lists = JSON.parse(localStorage.getItem('lists'))

    const resetData = () => {
        setScore(0);
        setStop(false);
    }

    const checkMainMenu = () => {
        resetData();
        setGameState('home');
    }

    return (
        <div className="Leaderboard">
            <Button
                variant='outline-info'
                onClick={() => checkMainMenu()}
                className='main-menu leaderboard'
            >
                Main Menu
            </Button>
            <main>
                <h1>LeaderBoard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Highest Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists ? (
                            lists.map((list, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{list.name}</td>
                                        <td>{list.score}</td>
                                    </tr>
                                )
                            })) : (
                                localStorage.setItem('lists', JSON.stringify([]))
                            )
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default LeaderBoard;
