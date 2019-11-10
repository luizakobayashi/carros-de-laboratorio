import React from "react";
import img from "../imgs/car.png"

const useStyles = {
  container: {
    border: "solid 2px #cccc",
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    padding: "2% 3%",
    marginTop: "10px",
    justifyContent: "space-between"
  },

  carContainer:{
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
  },

  carPriceContainer: {
    display: "flex", 
    flexDirection: "column", 
    padding: "5px", 
    marginLeft: "10px",
    borderLeft: "2px solid #cccc"
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
      <div style={useStyles.imageContainer}>
        <img src={img} style={useStyles.image}/>
      </div>
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
