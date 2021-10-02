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
