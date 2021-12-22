import React from 'react';
import icon from './my_face.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        <p>
          This is Christine's portfolio. It's a work in progress!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/christineegroux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See her LinkedIn.
        </a>
      </header>
    </div>
  );
}

export default App;
