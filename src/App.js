import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import {useToggle} from './hooks/useToggle'

function App() {

  const [isDarkMode, setIsDarkMode] = useToggle(false);
  return (
    <div className={isDarkMode ? "App dark": "App light"}>
      <button className="dark-mode" onClick={setIsDarkMode}>Dark/Light</button>
      <GameContainer />
    </div>
  );
}

export default App;
