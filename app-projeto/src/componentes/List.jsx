import React, { useEffect, useState } from 'react'
import './list.css'

function List() {

  const [User, setUser] = useState([])
  const [payment, setPayment] = useState("")
  const [showModal, setShowModal] = useState("none")
  const [selectUser, setSelectUser] = useState({})
  const [showTransação, setShowTransação] = useState("none")
  const [cardSelect, setCardSelect] = useState ("")
  const [transação, setTransação] = useState("")
  
  // CARTÕES
  let cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];
  
  // CHAMANDO A API 
  useEffect(() => {
    fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce", {
      method: 'post'
    })
    .then((data) => data.json())
    .then((result) => {
      setUser(result)
    })
  }, [])
  
  // FUNÇAO PAGAR
  const clickPagar = (dados) => {
    setShowModal("block")
    setSelectUser(dados)
  }
  // RELOAD NO FORMULARIO
  const resetForm = () => {
    setPayment("")
    setCardSelect("")
    setShowTransação("none")
  }
  
  // VERIFICAÇÃO DAS INFORMAÇOES 
  const send = (evt) => {
    evt.preventDefault(evt)
    
    const jsonParam = {
      "card_number": cards[cardSelect].card_number,
      "cvv": cards[cardSelect].cvv,
      "expiry_date": cards[cardSelect].expiry_date,
      "destination_user_id": selectUser.id,
      "value": payment
    }
    
    fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", {
      method: "post",
      body: jsonParam
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data, selectUser.name)
      setShowModal("none")
      setShowTransação("block")
      
      if (data.status === "Aprovada") {
        setTransação("Pagamento foi Concluído Com Sucesso!")
        
      } else { 
        setTransação("Erro no pagamento ")
      }
    })
  }
  
  return <div>
    {User.map((dados, index) => {
      return <div key={"Linha Index Client: " + index}>
        <ul className="lista" onClick={() => setShowModal("none")}>
          <li>
            <div>
            <img className="imgPerfil" src={dados.img} />
            </div>
            <span className="nomePerfil"><strong>Nome do Usuário: </strong>{dados.name}</span>
            <span className="idPerfil"><strong>Id:</strong>{dados.id} - </span>
            <span className="UserPerfil"><strong>Username: </strong>{dados.username}</span>
          </li>
        </ul>
        <button className="botaoPagar" onClick={() =>
          clickPagar(dados)
        }> Pagar </button>
      </div>
    })}
    <div id="modal" className="modal" style={{ display: showModal }} >

      <div className="headerModal">
        <span>Pagamento para :<strong style={{ color: 'yellow' }}> {selectUser.name}</strong> </span>
      </div>
      <div id="meuForm" className="form" > 
        <div className="impt">
          <input placeholder="R$ 0,00" 
          type="number" 
          value={payment} 
          onChange={e => setPayment(e.target.value)} 
          className="caixas">
          </input>
        </div>
        <div className="selec">
          <select className="caixas" placeholder="Selecione o tipo de cartão"  required value={cardSelect} onChange= {e => setCardSelect(e.target.value)}>
            <option>Selecione o cartão</option>
            {cards.map((card, i) => {
              return <option key={'optionCard' + i} value={i}>
                {card.card_number.substring(12)}
              </option>
            })}
          </select>
        </div>
        <button type="submit" onClick={send} className="caixas"> Salvar</button>
      </div>
    </div>
    <div style={{ display: showTransação }}>
            <div className="modRecibo">
                <div className="recibo">
                    <div className="textRecibo">
                        <div>
                            Recibo de Pagamento
                        </div>
                        <span className="close" onClick={() => resetForm()}>
                            X
                        </span>
                    </div>
                    <div className="reciboStatus">
                        {transação}
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default List
