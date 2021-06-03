import React from 'react';
import logo from 'assets/logo.svg';
import 'assets/style/App.scss';
import {RouteConfig} from "router/RouteConfig";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
function App() {
    const count =  useTypedSelector(state => state.count.count)
    const {addCount} = useActions()
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <main>
          <p>{count}</p>
          <button onClick={() => addCount(count+1)}>1 </button>
        <RouteConfig/>
      </main>
    </div>
  );
}

export default App;
