import React, { Component } from "react"
import './list.css'
import api from "./modal";

// FUNÇÃO PARA PEGAR A API
class App extends Component{

  state= {
    nome:[],
  }

  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data);

    this.setState({ nome: response.data });
  }


  // FUNÇÃO PARA RENDERIZAR O CODIGO NA TELA 
  render(){

    const { nome } = this.state;

    return(
      <div>
      
        {nome.map(dados => (

          <ul key={nome.id}  className="lista">
          <li><img className="imgPerfil" src={dados.img}></img> <span className="nomePerfil"><strong>Nome:</strong> {dados.name}</span>  <span className="idPerfil"><strong>Id:</strong>{dados.id}</span> <span className="UserPerfil"><strong>Username:</strong>{dados.username}</span><button className="botaoPagar">Pagar</button></li>
        </ul>
        ))}

        {/* <li className="lista"><button className="botaoPagar">Pagar</button></li>
        <li className="lista"><button className="botaoPagar">Pagar</button></li>
        <li className="lista"><button className="botaoPagar">Pagar</button></li>
        <li className="lista"><button className="botaoPagar ">Pagar</button></li> */}
       </div> 
       );
      }
    }
    
    export default App
    
    // function Lista() {
      //  fetch(' https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      //  .then((response) => response.json()).then((data) => console.log(data))
      
      //     return (
        //       <div>
        //         <li className="lista"><button className="botaoPagar" onClick={modal}>Pagar</button></li>
        //         <li className="lista"><button className="botaoPagar" onClick={modal}>Pagar</button></li>
        //         <li className="lista"><button className="botaoPagar" onClick={modal}>Pagar</button></li>
        //         <li className="lista"><button className="botaoPagar" onClick={modal}>Pagar</button></li>
        //       </div> );
        // } 
        
        // export default Lista
        // <div>
        //   <h1>Listar dados</h1>
        //   {nome.map(nomes =>(
        //       <li key={nomes.show.id}>
        //         <h2>
        //           <strong>Titulos</strong>
        //           {nomes.show.name}              
        //         </h2>
        //       </li>
        //     ))}
        // </div>