import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import useSound from 'use-sound';
import gameofnerds from '../assets/sounds/gameofnerds.mp3';
import correct from '../assets/sounds/correct.mp3';
import wrong from '../assets/sounds/wrong.mp3';

import { GameStateContext } from '../helpers/contexts';
import { Questions } from '../helpers/questions';

import Results from './Results';
import Timer from './Timer';


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { score, setScore, setGameState, stop, setStop } = useContext(GameStateContext);

    const [play, exposedData] = useSound(gameofnerds, { volume: 1 });
    const [playCorrect] = useSound(correct, { volume: 0.1 });
    const [playWrong] = useSound(wrong, { volume: 0.2 });

    const optionClicked = (isCorrect) => {
        // console.log(isCorrect);
        if (isCorrect) {
            setScore(score + 1);
            playCorrect();
        } else if (!isCorrect) {
            playWrong();
        }
        (currentQuestion + 1 < Questions.length) ? setCurrentQuestion(currentQuestion + 1) : setGameState('results');
    }

    // play sound upon start
    useEffect(() => {
        play();
    }, [play]);

    const resetData = () => {
        setScore(0);
        setStop(false);
        exposedData.stop();
    }

    const checkMainMenu = () => {
        resetData();
        setGameState('home');
    }

    const checkLeaderBoard = () => {
        resetData();
        setGameState('leaderboard');
    }

    const showResultsAtFinished = () => {
        exposedData.stop()
        return <Results />
    }

    return (
        <div className='Quiz'>
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
            {
                stop ? (
                    showResultsAtFinished()
                ) : (
                    <div id='timer'>
                        <Timer />
                    </div>
                )
            }

            <h2>{Questions[currentQuestion].prompt}</h2>
            {
                Questions[currentQuestion].options.map(option => {
                    return (
                        <button
                            className='choices'
                            key={option.id}
                            onClick={() => optionClicked(option.isCorrect)}
                        >
                            {option.text}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Quiz;
