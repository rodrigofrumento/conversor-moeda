import React from 'react';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
}

export default App;
