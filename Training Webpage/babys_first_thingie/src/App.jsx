import React, { useState } from 'react';


function App() {
  const [temperatureValue, setTemperatureValue] = useState(72);
  const [temperatureColor, setTemperatureColor] = useState('neutral');

  const increaseTemp = () => {
    if (temperatureValue === 90) return;

    const newTemp = temperatureValue + 1;

    if(newTemp >= 80){
      setTemperatureColor('hot');
    }
    else if(newTemp < 80 && newTemp >= 68){
      setTemperatureColor('neutral');
    }
    else{
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemp);
  }

  const decreaseTemp = () => {
    if (temperatureValue === 68) return;
    
    const newTemp = temperatureValue - 1;

    if(newTemp <= 68){
      setTemperatureColor('cold');
    }
    else if(newTemp < 80 && newTemp >= 68){
      setTemperatureColor('neutral');
    }
    else{
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemp);
  }

  return (
    <div>  
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
        </div>
        <div className="button-container">
          <button onClick={() => decreaseTemp()}>-</button>
          <button onClick={() => increaseTemp()}>+</button>
        </div>
      </div>
    </div>
  ) 
}

export default App
