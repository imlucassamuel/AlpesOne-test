import React from "react";

import './Form.scss'
import carIcon from '../../assets/carro.svg'
import Button from "../../components/Button";

function Form() {
  return (
    <form action="submit" >
      <div className="form-content">
        <div className="form-title">
          <img src={carIcon} alt="icone-carro" />
          <h2>Solicitar cotação</h2>
        </div>
          <input type="text" placeholder="Nome" required/>
          <input type="text" placeholder="E-mail" required/>
          <input type="text" placeholder="Telefone" required/>
          <input type="text" placeholder="Modelo" required/>
          <input type="text" placeholder="Mensagem" required/>    
      </div>
      <div className="policy-therms">
        <input type="checkbox" required />
        <label >Aceito a <b>Política de Privacidade</b></label>
      </div>
      <Button>Enviar</Button>
    </form>
  );
}

export default Form;
