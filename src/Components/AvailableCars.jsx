import React from "react";
import CarCard from "./CarCard";
import DealershipCard from "./DealershipCard";

const cars = [
  {
    model: "HB20",
    price: 18000,
    manufacturer: "Hyundai",
    features: "Preto, quatro portas, completo"
  },
  {
    model: "Renegade",
    price: 40000,
    manufacturer: "Jeep",
    features: "Cinza, quatro portas, completo"
  },
  {
    model: "Hilux",
    price: 30000,
    manufacturer: "Toyota",
    features: "Branco, quatro portas, completo"
  },
  {
    model: "Fit",
    price: 16000,
    manufacturer: "Honda",
    features: "Cinza, quatro portas, completo"
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
