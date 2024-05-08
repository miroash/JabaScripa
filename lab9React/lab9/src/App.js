import React from 'react';
import './App.css';
import Square from './Square'; 
import OnlyEven from './OnlyEven'; 
import Temperature from './Temperature'; 
import ColorChanger from './ColorChanger'; // Импортируем компонент ColorChanger из файла ColorChanger.js

function App() {
  return (
    <div className="App">
      {/* Используем компоненты */}
      <Square n={3} /> {/* Выведет: 9 */}
      
      {/* Выведет: 14, 6, 12, 2 */}
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} /> 
      
      {/* Выведет температуру со стилем в зависимости от значения */}
      <Temperature t={451} /> {/* Выведет красным */}

      {/* Используем компонент ColorChanger */}
      <ColorChanger />
    </div>
  );
}

export default App;
