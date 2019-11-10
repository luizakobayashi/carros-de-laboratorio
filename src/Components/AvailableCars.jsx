import React from "react";
import CarCard from "./CarCard";

const cars = [
  {
    model: "Test Model",
    price: 10000,
    manufacturer: "Fiat",
    features: "Cinza, quatro portas, brilha no escuro"
  }
];

const useStyles = {
  title: {
    fontWeight: "600",
    fontSize: "larger",
    paddingLeft: "5px"
  }
};

const AvailableCars = ({}) => {
  return (
    <section>
      <div>
        <div style={useStyles.title}>
          Carros Disponíveis
        </div>
        <div style={{width: "40%"}}>
          <CarCard car={cars[0]}></CarCard>
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;
