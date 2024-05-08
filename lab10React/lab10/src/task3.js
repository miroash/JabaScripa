import React, { useState, useEffect } from 'react';

function PrimeNumbers() {
  const [primes, setPrimes] = useState([2]); 
  const [currentNumber, setCurrentNumber] = useState(3); 

  useEffect(() => {
    const isPrime = num => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const timer = setInterval(() => {
      while (!isPrime(currentNumber)) {
        setCurrentNumber(prevNumber => prevNumber + 2); 
      }
      setPrimes(prevPrimes => [...prevPrimes, currentNumber]); 
      setCurrentNumber(prevNumber => prevNumber + 2); 
    }, 1000);

    return () => clearInterval(timer); 
  }, [currentNumber]);

  return (
    <div>
      <h2>Простые числа:</h2>
      <p>{primes.join(', ')}</p>
    </div>
  );
}

export default PrimeNumbers;
