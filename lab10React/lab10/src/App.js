import React from 'react';
import './App.css';
import Revert from './task1';
import Timer from './task2';
import Stopwatch from './task3';
import PrimeNumbers from './task4';

function App() {
  return (
    <div className="App">
      {/* Используем компоненты */}
      <Revert s="привет!" />

      <Timer />

      <Stopwatch />

      <PrimeNumbers />
    </div>
  );
}

export default App;
