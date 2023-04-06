import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import { useAppDispatch } from './store/store';
import { settingsActions } from './store/settings/settingsSlice';

function App() {
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(settingsActions.toggleTheme());
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleToggleTheme}>
            Toggle theme
        </button>
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
