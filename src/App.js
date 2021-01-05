import { useState } from 'react';
import './App.css';
import Navigation from './Nav/Navigation';

function App() {
  const [ shrink, setShrink ] = useState('');  
  const handleOpen = () => {
    if(shrink === '') setShrink('shrink')
    else setShrink('');
  }
  return (
    <div className="App">
      <Navigation />
      <div className={' content ' + shrink}>
        { !shrink &&  (
          <button onClick={handleOpen}>Open</button>
        )}
        <header className="App-header"  onClick={() => setShrink('')}>
          <p>
            Demo Modern Navigation + Animate SVG
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
    </div>
  );
}

export default App;
