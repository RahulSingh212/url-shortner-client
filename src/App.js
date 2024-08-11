import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={`relative w-full flex flex-col`}>
      <header className={`relative w-full`}>
        <img src={logo} className={`relative`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={``}
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
