import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

import React, { Component} from 'react';
import './App.css';


class App extends React.Component {
  render(){
    return (
      React.createElement(
        'h1',
        {id: 'titulo', className: 'encabezado'},
        'Hola mundo'
      )
    )
  }

}

export default App;
