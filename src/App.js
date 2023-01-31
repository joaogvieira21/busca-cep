import { FiSearch } from 'react-icons/fi'
import { useState} from 'react'
import './App.css';
import React from 'react'
import api from './services/api'

function App() {

  const [inputCep, setInputCep] = useState("");
  const [cep, setCep] = useState({});


  async function handleSearch () {
    if(inputCep.length < 8) {
      alert("Digite um cep com 8 números!")
      setInputCep("");
    }
    try{
      const response = await api.get(`${inputCep}/json`)
      setCep(response.data)
      setInputCep("");
    }catch{

    }
  }
  return( 
    <div className="container">
      <h1>Buscador de CEP</h1>
      <div className="input-container">
        <input size="25" placeholder="Digite o cep..." value={inputCep} onChange={(e)=>setInputCep(e.target.value)}></input>
        <button className="btn" onClick={handleSearch}>
          <FiSearch size="25" ></FiSearch>
        </button>
      </div>
      <main className="show-cep">
        <h2>CEP: {cep.cep} </h2>
        <span>{cep.logradouro}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>
      </main>
    </div>
    )

}

export default App;
