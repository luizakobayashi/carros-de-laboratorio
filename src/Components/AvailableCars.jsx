import React from "react";
import CarCard from "./CarCard";
import DealershipCard from "./DealershipCard";

const cars = [
  {
    model: "Test Model",
    price: 10000,
    manufacturer: "Fiat",
    features: "Cinza, quatro portas, brilha no escuro"
  },
  {
    model: "Test Model",
    price: 10000,
    manufacturer: "Fiat",
    features: "Cinza, quatro portas, brilha no escuro"
  },
  {
    model: "Test Model",
    price: 10000,
    manufacturer: "Fiat",
    features: "Cinza, quatro portas, brilha no escuro"
  }
];

const dealerships = [
  {
    name: "Concessionária",
    address: "Rua da laranja, 222"
  }
];

const useStyles = {
  title: {
    fontWeight: "600",
    fontSize: "larger",
    paddingLeft: "10px",
    paddingTop: "5px",
    paddingBottom: "5px"
  }
};

const AvailableCars = ({}) => {
  const getCarList = () => {
    return cars.map(car => {
      return <CarCard car={car}></CarCard>;
    });
  };

  return (
    <section style={{marginLeft: "25px"}}>
      <div>
        <div style={useStyles.title}>Carros Disponíveis</div>
        <div style={{ width: "41%" }}>{getCarList()}</div>
      </div>
    </section>
  );
};

export default AvailableCars;
