import React, { useState, useEffect } from "react";
import img from "../imgs/car.png";
import CurrencyFormat from "react-currency-format";
import DealershipCard from "./DealershipCard";

const useStyles = {
  container: {
    textAlign: "center"
  },

  carContainer: {
    justifyContent: "space-between",
    display: "flex",
    marginTop: "10px",
    padding: "2% 3%",
    backgroundColor: "#fff",
    border: "solid 2px #cccc",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    margin: "15px"
  },

  imageContainer: {
    display: "flex",
    alignItems: "flex-start",
    paddingRight: "15px"
  },

  image: {
    width: "140px"
  },

  carDetailContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: "5px",
    paddingLeft: "5px"
  },

  carPriceContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    marginLeft: "10px",
    borderLeft: "2px solid #cccc",
    justifyContent: "center"
  },

  carModel: {
    fontSize: "25px",
    paddingBottom: "2px"
  },

  carDetails: {
    paddingBottom: "2px"
  },

  carFeatures: {
    display: "flex",
    flexWrap: "wrap"
  },

  carPrice: {
    fontSize: "30px",
    fontWeight: "bold"
  },

  dealerships: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "15px"
  },

  dealershipsTitle: {
    fontWeight: "600",
    fontSize: "medium",
    paddingLeft: "5px",
    paddingTop: "5px"
  }
};

const CarCard = ({ car }) => {
  const [cardClicked, setCarClicked] = useState(false);
  const onCarCardClicked = () => {
    setCarClicked(!cardClicked);
  };

  return (
    <section style={useStyles.container}>
      <button style={useStyles.carContainer} onClick={onCarCardClicked}>
        <div style={useStyles.imageContainer}>
          <img src={img} style={useStyles.image} />
        </div>
        <div style={useStyles.carDetailContainer}>
          <span style={useStyles.carModel}>{car.model}</span>
          <span style={useStyles.carDetails}>{car.manufacturer}</span>
          <span style={useStyles.carFeatures}>{car.features}</span>
        </div>
        <div style={useStyles.carPriceContainer}>
          <span>Price</span>
          <CurrencyFormat
            style={useStyles.carPrice}
            value={car.price}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix="R$"
            displayType={"text"}
          ></CurrencyFormat>
        </div>
      </button>
      {cardClicked ? (
        <div style={useStyles.dealerships}> 
          <div style={useStyles.dealershipsTitle}>Selecione a concessionária desejada</div>
          <DealershipCard
            dealerships={[{ name: "teste", address: "testsetsete" }]}
          ></DealershipCard>
        </div>
      ) : null}
    </section>
  );
};

export default CarCard;
