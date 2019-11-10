import React from "react";

const useStyles = {
    container: {
      border: "solid 2px #cccc",
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
    },
  
};

const DealershipCard = ({dealership}) =>{
    return (
        <section style={useStyles.container}>
            <div style={useStyles.dealershipContainer}>
                <span style={useStyles.name}>{dealership.name}</span>
                <span style={useStyles.address}>{dealership.address}</span>
            </div>
        </section>
    );
};

export default DealershipCard;
