import logo from './logo.svg';
import Sokroom from './Sokroom.svg'
import Svarkvk from './Svarkvk.svg'
import Arfprog from './Arfprog.svg'
import soomasnap from './soomasnap.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Sokroom} className="App-su" alt="su" />
        <img src={Svarkvk} className="App-sk" alt="sk" />

        <img src={Arfprog} className="App-ar" alt="ar" />
        <img src={soomasnap} className="App-soo" alt="soo" />

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
