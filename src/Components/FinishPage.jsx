import React from "react";

const useStyles = {
    content: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      marginLeft: "25px"
    },
  
    title: {
      fontWeight: "600",
      fontSize: "larger",
      paddingTop: "5px",
      paddingBottom: "5px"
    },

    pageContent: {
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        padding: "20px"
    },
};


const FinishPage = ({}) => {
    return (
        <div style={useStyles.content}>
            <div style={useStyles.title}>Sucesso!</div>
            <div style={useStyles.pageContent}>
                    Obrigado por preferir os carros de laboratório!
                    <p></p>
                    Seus dados foram enviados, não se preocupe, entraremos em contato em breve.

            </div>
        </div>
        );
    };
    
export default FinishPage;
    