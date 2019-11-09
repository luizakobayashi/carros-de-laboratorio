import React from "react";

const useStyles = {
  container: {
    border: "solid 2px #f2f2f2",
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    padding: "2% 3%",
    marginTop: "10px"
  },

  carContainer:{
    display: "flex",
    flexDirection: "row",
    margin: "15px"
  },

  imageContainer: {
  },

  carDetailContainer: {
  },

  carPriceContainer: {
    display: "flex", 
    flexDirection: "column", 
    padding: "5px", 
    marginLeft: "10px"
  },

  carDetailImportant: {
    fontSize: "2em",
    display: "flex"
  },

  carDetails: {
    display: "flex"
  },

  carFeatures: {
    display: "flex"
  }
};

const CarCard = ({ car }) => {
  return (
    <section style={useStyles.container}>
      <div style={useStyles.carContainer}>
      <div style={useStyles.imageContainer}></div>
      <div style={useStyles.carDetailContainer}>
        <span style={useStyles.carDetailImportant}>{car.model}</span>
        <span style={useStyles.carDetails}>{car.manufacturer}</span>
        <span style={useStyles.carFeatures}>características</span>
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
