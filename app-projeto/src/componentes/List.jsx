import React, { Component } from "react"
import './list.css'
import api from "./api";
// import Modal from "./modal";


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

  
  
  let mostraModal = (e, i) => {
    // console.log(e.target.dataset.index)
    // console.log(i)

    setTarefaSelecionada(Object.assign({}, tarefas[i]))
    setShowModal(true);
    

}
  // FUNÇÃO PARA RENDERIZAR O CODIGO NA TELA 
  render(){
    let [showModal, setShowModal] = useState(false)
    const { nome } = this.state;

    return(
      <div>
      
        {nome.map(dados => (

          <ul key={nome.id}  className="lista">
           <li>
             <img className="imgPerfil" src={dados.img}></img>
              <span className="nomePerfil"><strong>Nome do Usuário: </strong>{dados.name}</span>
              <span className="idPerfil"><strong>Id:</strong>{dados.id} - </span> 
              <span className="UserPerfil"><strong>Username: </strong>{dados.username}</span>
              <button className="botaoPagar" style={{display: (showModal ? 'block' : 'none')}} onClick={() => setShowModal(false)}>Pagar</button>
            </li>
        </ul>
        ))}
      <div id="modal" className="modal" style={{display: (showModal ? 'block' : 'none' )}}>
                    <div className="form">
                        <div></div>
                        <div>
                            <select>
                                <option value="to do"> TO DO </option>
                                <option value="in progress"> IN PROGRESS </option>
                                <option value="complete"> COMPLETE </option>
                            </select>
                        </div>
                        <button>Salvar</button>
                    </div>
            </div>
       </div> 
       );
      }
    }
    
    export default App
