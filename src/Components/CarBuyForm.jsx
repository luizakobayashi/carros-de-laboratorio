import React, { useState, useEffect } from "react";

const CarBuyForm = ({}) => {
  return (
    <form name="meu_form">
      <h1>Entre em contato</h1>
      <p>
        <input
          type="text"
          id="nomeid"
          placeholder="Seu nome"
          required="required"
          name="nome"
        />
        <label for="nome">Nome</label>
      </p>
      <p>
        <input
          type="text"
          id="CPFid"
          placeholder="XXX.XXX.XXX-XX"
          name="fone"
        />
        <label for="CPF">CPF</label>
      </p>
      <p>
        <input type="text" id="enderecoid" placeholder="Est Xxxx" name="fone" />
        <label for="Endereco">Endereço</label>
      </p>
      <p>
        <input
          type="text"
          id="telefoneid"
          placeholder="(xx)xxxx-xxxx"
          name="telefone"
        />
        <label for="telefone">Telefone</label>
      </p>
      <p>
        <input
          type="text"
          id="dataNascid"
          placeholder="XX/XX/XXXX"
          name="dataNasc"
        />
        <label for="dataNasc">Data de nascimento</label>
      </p>
      <p>
        <input type="text" id="priceid" placeholder="R$ 00,00" name="price" />
        <label for="price">Price</label>
      </p>
      <p>
        <input
          type="text"
          id="emailid"
          placeholder="email@email.com"
          name="email"
        />
        <label for="email">Email</label>
      </p>
      <p>
        <select
          id="manufacturerid"
          placeholder="Manufacturer"
          name="Manufacturer"
        >
          <option value="">Selecione o fabricante</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Toyota">Toyota</option>
          <option value="Jeep">Jeep</option>
        </select>
        <label for="manufacturer">Manufacturer</label>
      </p>
      <p>
        <select id="modelid" placeholder="Model" name="model">
          <option value="">Selecione o modelo</option>
          <option value="HB20">HB20</option>
          <option value="Hilux">Hilux</option>
          <option value="Fit">Fit</option>
          <option value="Renegade">Renegade</option>
        </select>
        <label for="model">Model</label>
      </p>
      <p>
        <input
          type="text"
          id="featureid"
          placeholder="feature"
          name="feature"
        />
        <label for="feature">Feature</label>
      </p>
      <p>
        <input type="button" onclick="Enviar()" value="Enviar" />
      </p>
    </form>
  );
};

export default CarBuyForm;
