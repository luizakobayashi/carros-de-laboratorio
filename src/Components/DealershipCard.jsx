import React from "react";

const useStyles = {
  container: {
    border: "2px solid #bcbcbc",
    borderRadius: "15px",
    textAlign: "center",
    display: "flex",
    padding: "2% 3%",
    marginTop: "10px",
    justifyContent: "space-between"
  },

  dealershipContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "5px",
    paddingLeft: "5px"
  },

  name: {
    paddingBottom: "2px"
  },

  address: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const DealershipCard = ({ dealerships }) => {
  return (
    <section style={useStyles.container}>
      {dealerships.map(dealership => {
        return (
          <button style={useStyles.dealershipContainer}>
            <span style={useStyles.name}>{dealership.name}</span>
            <span style={useStyles.address}>{dealership.address}</span>
          </button>
        );
      })}
    </section>
  );
};

export default DealershipCard;
