import React from 'react';
import './App.scss';
import { Histogram } from './histogram';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Optibus - Rides per hour
        </p>
        <Histogram />  
      </header>
    </div>
  );
}

export default App;


