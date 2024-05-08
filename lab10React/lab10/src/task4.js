import React, { useState, useEffect } from 'react';

function Revert({ s }) {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      setRevertedString(prevString => {

        const lastChar = prevString.charAt(prevString.length - 1);
        const substring = prevString.slice(0, -1);
        return lastChar + substring;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [s]); 

  return (
    <div>
      <h2>Перевернутая строка:</h2>
      <p>{revertedString}</p>
    </div>
  );
}

export default Revert;
