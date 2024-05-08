import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    // Останавливаем таймер, когда count достигает 0
    if (count === 0) {
      clearInterval(timer);
    }

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timer);
  }, [count]); // Добавляем count в зависимости, чтобы useEffect запускался снова при изменении count

  return (
    <div>
      <h2>Обратный таймер:</h2>
      <p>{count}</p>
    </div>
  );
}

export default Timer;