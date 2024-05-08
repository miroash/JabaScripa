import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('red');

  const toggleColor = () => {
    setColor(color === 'red' ? 'green' : 'red');
  };

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <button onClick={toggleColor}>Изменить цвет</button>
    </div>
  );
}

export default ColorChanger;