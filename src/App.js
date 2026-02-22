import logo from './logo.svg';
import Sokroom from './Sokroom.svg'
import Svarkvk from './Svarkvk.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Sokroom} className="App-su" alt="su" />
        <img src={Svarkvk} className="App-sk" alt="sk" />

        <p>
          Учи <code>Матешу</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Это Интересно
        </a>
      </header>
    </div>
  );
}

export default App;
