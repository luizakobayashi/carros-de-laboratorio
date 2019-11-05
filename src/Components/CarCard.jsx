import React from "react";

const useStyles = {
  container: {
    border: "solid 2px #b0b0b0",
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    padding: "2% 3%",
    marginTop: "10px"
  },

  carContainer:{
    margin: "15px",
  },

  imageContainer: {
    width: "40%"
  },

  carDetailContainer: {
    width: "30%"
  },
  
  carPriceContainer: {
    width: "30%"
  },

  carDetailImportant: {
    display: "block",
    fontSize: "2em"
  },

  carDetails: {
    display: "block"
  }
};

const CarCard = ({ car }) => {
  return (
    <section style={useStyles.container}>
      <div style={useStyles.carContainer} style={{flexDirection: "row"}}>
      <div style={useStyles.imageContainer}></div>
      <div style={useStyles.carDetailContainer}>
        <span style={useStyles.carDetailImportant}>{car.model}</span>
        <span style={useStyles.carDetails}>{car.manufacurer}</span>
        <span>características</span>
      </div>
      <div style={useStyles.carPriceContainer}>
        <span>Price</span>
        <strong style={useStyles.carDetailImportant}>{car.price}</strong>
      </div>
      </div>
    </section>
  );
};

export default CarCard;
