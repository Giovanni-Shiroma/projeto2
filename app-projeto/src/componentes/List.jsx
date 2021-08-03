import React, { Component } from "react"
import './list.css'
import Modal from "./modal";
import api from "./api";

// FUNÇÃO PARA PUXAR A API
class App extends Component{
  
  state= {
    nome:[],
  }
  
  async componentDidMount(){
    const response = await api.get('');
    
    console.log(response.data);
    
    this.setState({ nome: response.data });
  }

  mod = () =>{
    this.setState({moda: <Modal/>})
  }


  

  // FUNÇÃO PARA RENDERIZAR NA TELA 
  render(){
    const { nome } = this.state;
    
    return(
      <div >
      
        {nome.map(dados => (

          <ul key={nome.id}  className="lista">
           <li>
             <img className="imgPerfil" src={dados.img}/>
              <span className="nomePerfil"><strong>Nome do Usuário: </strong>{dados.name}</span>
              <span className="idPerfil"><strong>Id:</strong>{dados.id} - </span> 
              <span className="UserPerfil"><strong>Username: </strong>{dados.username}</span>
              <button className="botaoPagar" onClick={this.mod}> Pagar </button>
            </li>
        </ul>
        ))}
        <span>{this.state.moda
        }</span>
       </div> 
       );
      }
    }

    export default App
