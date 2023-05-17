import logo from './logo.svg';
import Weather from './Weather'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Atlanta" />
        <footer>
          This project was coded by{" "}
          <a>
            Sarah Kim
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/kimsarahsj/reactweatherapp"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
