import React from 'react';
import './App.scss';
import { histogram } from './histogram';
import { processDriveTimes } from './processor';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Optibus
        </p>
        {histogram()}      
      </header>
    </div>
  );
}

export default App;


