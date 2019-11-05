import React from "react";
import CarCard from "./CarCard";

const cars = [
  {
    model: "Test Model",
    price: 10000,
    manufacturer: "Fiat"
  }
];

const AvailableCars = ({}) => {
  return (
    <section>
      <div>
        Available Cars
        <div style={{width: "40%"}}>
          <CarCard car={cars[0]}></CarCard>
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;
