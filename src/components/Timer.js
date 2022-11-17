import { useContext, useEffect, useState } from 'react';

import { GameStateContext } from '../helpers/contexts';


function Timer() {
    const { setStop } = useContext(GameStateContext);

    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (timer === 0) {
            setStop(true);
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [timer, setStop]);

    return timer;
}

export default Timer;
