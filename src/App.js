import { useState } from 'react';

import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import LeaderBoard from './components/LeaderBoard';

import { GameStateContext } from './helpers/contexts';

function App() {
	const [gameState, setGameState] = useState('home');
	const [userName, setUserName] = useState('');
	const [score, setScore] = useState(0);
	const [stop, setStop] = useState(false);
	const [list, setList] = useState([])

	return (
		<div className='App'>
			<GameStateContext.Provider
				value={{
					gameState,
					setGameState,
					userName,
					setUserName,
					score,
					setScore,
					stop,
					setStop,
					list,
					setList
				}}
			>
				{gameState === 'home' && <Home />}
				{gameState === 'quiz' && <Quiz />}
				{gameState === 'results' && <Results />}
				{gameState === 'leaderboard' && <LeaderBoard />}
			</GameStateContext.Provider>
		</div>
	);
}

export default App;
