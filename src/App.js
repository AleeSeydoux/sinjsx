import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  render() {
    return (
      React.createElement(
        'h1',
        {id: 'titulo', className: 'encabezado'},
        'Hola Mundo' 
      
      )
    );
  }
}


export default App;
