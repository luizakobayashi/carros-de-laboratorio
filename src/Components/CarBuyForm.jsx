import React, { Component, useState, useEffect } from "react";
import {Enviar} from '../services/api'

const useStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginLeft: "25px"
  },

  title: {
    fontWeight: "600",
    fontSize: "larger",
    paddingTop: "5px",
    paddingBottom: "5px"
  },

  formContent: {
    borderRadius: "10px",
    backgroundColor: "#f2f2f2",
    padding: "20px"
  },

  form: {
    display: "flex",
    flexWrap: "wrap"
  },

  item: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "5px"
  },

  input: {
    padding: "5px 15px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  },

  sendButton: {
    fontSize: "initial",
    padding: "10px 15px",
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    borderRadius: "10px",
    fontWeight: "600",
    backgroundColor: "#cccc",
    width: "100%"
  }
};

class CarBuyForm extends Component {
  Enviar = async () => { 
    const response = await Enviar() 
    console.log({ response }) 
  } 

  onBuyClicked = () => {
    this.props.history.push("/finish");
  };

  render() {
    return(
    <form name="meu_form" style={useStyles.content}>
       <div style={useStyles.title}>Entre em contato</div>
       <div style={useStyles.formContent}>
       <div style={useStyles.form}>
      <p>
      <div style={useStyles.item}>
      <label for="nome">Nome</label>
        <input
          type="text"
          id="nomeid"
          placeholder="Seu nome"
          required="required"
          name="nome"
          style={useStyles.input}
        />
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
      <label for="CPF">CPF</label>
        <input
          type="text"
          id="CPFid"
          placeholder="XXX.XXX.XXX-XX"
          name="fone"
          style={useStyles.input}
        />
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="Endereco">Endereço</label>
        <input type="text" id="enderecoid" placeholder="Est Xxxx" name="fone" style={useStyles.input}/>
      </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="dataNasc">Data de nascimento</label>
        <input
          type="text"
          id="dataNascid"
          placeholder="XX/XX/XXXX"
          name="dataNasc"
          style={useStyles.input}
        />
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
      <label for="telefone">Telefone</label>
        <input
          type="text"
          id="telefoneid"
          placeholder="(xx)xxxx-xxxx"
          name="telefone"
          style={useStyles.input}
        />
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="email">Email</label>
        <input
          type="text"
          id="emailid"
          placeholder="email@email.com"
          name="email"
          style={useStyles.input}
        />
        </div>
      </p>
      </div>
      <div style={useStyles.form}>
      <p>
      <div style={useStyles.item}>
        <label for="price">Price</label>
        <input type="text" id="priceid" placeholder="R$ 00,00" name="price" style={useStyles.input}/>
      </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="manufacturer">Fabricante</label>
        <select
          id="manufacturerid"
          placeholder="Manufacturer"
          name="Manufacturer"
          style={useStyles.input}
        >
          <option value="">Selecione o fabricante</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Toyota">Toyota</option>
          <option value="Jeep">Jeep</option>
        </select>
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="model">Modelo</label>
        <select id="modelid" placeholder="Model" name="model" style={useStyles.input}>
          <option value="">Selecione o modelo</option>
          <option value="HB20">HB20</option>
          <option value="Hilux">Hilux</option>
          <option value="Fit">Fit</option>
          <option value="Renegade">Renegade</option>
        </select>
        </div>
      </p>
      <p>
      <div style={useStyles.item}>
        <label for="feature">Feature</label>
        <input
          type="text"
          id="featureid"
          placeholder="feature"
          name="feature"
          style={useStyles.input}
        />
        </div>
      </p>
      </div>
      </div>
      <p>
        <input type="button" onClick={this.onBuyClicked} value="Enviar" style={useStyles.sendButton} />
      </p>
    </form>
    );
  };
};

export default CarBuyForm;
