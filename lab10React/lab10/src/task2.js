import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]); 

  const handleStartStop = () => {
    setIsRunning(!isRunning); 
  };

  return (
    <div>
      <h2>Таймер:</h2>
      <p>{count}</p>
      <button onClick={handleStartStop}>{isRunning ? '⏸' : '▶'}</button> {/* Изменяем текст кнопки в зависимости от состояния isRunning */}
    </div>
  );
}

export default Stopwatch;