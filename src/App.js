import Weather from './Weather'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Atlanta" />
        <footer>
          This project was coded by{" "}
          <a href="#">
            Sarah Kim
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/kimsarahsj/reactweatherapp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
