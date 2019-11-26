import React, {Component} from "react";

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

    endButton: {
        fontSize: "initial",
        padding: "10px 15px",
        textDecoration: "none",
        cursor: "pointer",
        color: "white",
        borderRadius: "10px",
        fontWeight: "600",
        backgroundColor: "#cccc",
        width: "100%"
      }
};

class FinishPage extends Component{
    onOkClicked = () => {
        this.props.history.push("/");
    };

    render(){
    return (
        <div style={useStyles.content}>
            <div style={useStyles.title}>Sucesso!</div>
            <div style={useStyles.pageContent}>
                    Obrigado por preferir os carros de laboratório!
                    <p></p>
                    Seus dados foram enviados, não se preocupe, entraremos em contato em breve.
            </div>
            <p></p>
            <input type="button" onClick={this.onOkClicked} value="Ok" style={useStyles.endButton} />
        </div>
        );
    };
    };
    
export default FinishPage;
    