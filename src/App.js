import { FiSearch } from 'react-icons/fi'

import './App.css';
import React from 'react'

function App() {
  return( 
    <div className="container">
      <h1>Buscador de CEP</h1>
      <div className="input-container">
        <input size="25" placeholder="Digite o cep..."></input>
        <button className="btn">
          <FiSearch size="25" ></FiSearch>
        </button>
      </div>
      <main className="show-cep">
        <h2>CEP: 88111-675</h2>
        <span>Rua Honoria Virgilina</span>
        <span>Complemento: qualquer</span>
        <span>Real Parque</span>
        <span>São José - SC</span>
      </main>
    </div>
    )

}

export default App;
