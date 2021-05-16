import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Bulb from './Bulb';
import Calc from './Calc';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Calc/>
      </header>
    </div>
  );
}

export default App;
