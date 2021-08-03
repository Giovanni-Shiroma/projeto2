import React ,  { Component, useEffect }  from "react";
import "./modal.css";


const Modal = () => {

    return(

    <div id="modal" className="modal">
        
        
        <div className="headerModal">
            <span>Pagamento para</span>
        </div>
        <div className="form">
            <div className="impt">
            <input placeholder="R$ 0,0" type="number"></input>
            </div>
            <div className="selec">
                <select>
                    <option value="to do"> Cartão com final 2 </option>
                    <option value="in progress"> Cartão com final 1  </option>
                </select>
            </div>
            <button>Salvar</button>
        </div>
    </div>
    )
}
export default Modal