import React, { useState, useEffect } from "react";
import img from "../imgs/car.png";
import CurrencyFormat from "react-currency-format";
import { withRouter } from "react-router";

const useStyles = {
  container: {
    textAlign: "center"
  },

  carContainer: {
    justifyContent: "space-between",
    display: "flex",
    marginTop: "10px",
    padding: "5% 3%",
    backgroundColor: "#fff",
    border: "solid 2px #cccc",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    margin: "10px"
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

  buy: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "15px"
  },

  buyButton: {
    fontSize: "initial",
    padding: "10px 15px",
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    borderRadius: "15px",
    fontWeight: "600",
    backgroundColor: "#cccc"
  }
};

class CarCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: this.props.car,
      cardClicked: false
    };
  }

  onCarCardClicked = () => {
    this.setState({ cardClicked: !this.state.cardClicked });
  };

  onBuyClicked = () => {
    this.props.history.push("/buy-car");
  };

  render() {
    return (
      <section style={useStyles.container}>
        <button style={useStyles.carContainer} onClick={this.onCarCardClicked}>
          <div style={useStyles.imageContainer}>
            <img src={img} style={useStyles.image} />
          </div>
          <div style={useStyles.carDetailContainer}>
            <span style={useStyles.carModel}>{this.state.car.model}</span>
            <span style={useStyles.carDetails}>
              {this.state.car.manufacturer}
            </span>
            <span style={useStyles.carFeatures}>{this.state.car.features}</span>
          </div>
          <div style={useStyles.carPriceContainer}>
            <span>Price</span>
            <CurrencyFormat
              style={useStyles.carPrice}
              value={this.state.car.price}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix="R$"
              displayType={"text"}
            ></CurrencyFormat>
          </div>
        </button>
        {this.state.cardClicked ? (
          <div style={useStyles.buy}>
            <input
              type="button"
              value="Comprar"
              style={useStyles.buyButton}
              onClick={this.onBuyClicked}
            />
          </div>
        ) : null}
      </section>
    );
  }
}

export default withRouter(CarCard);
