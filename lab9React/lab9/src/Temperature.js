import React from 'react';

function Temperature({ t }) {
  const temperatureStyle = {
    color: t < 0 ? 'blue' : 'red'
  };

  return (
    <div style={temperatureStyle}>
      {t}
    </div>
  );
}

export default Temperature;
