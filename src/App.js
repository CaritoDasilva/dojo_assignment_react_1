import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Home/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
