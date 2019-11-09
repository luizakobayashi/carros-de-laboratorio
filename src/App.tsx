import React from "react";
import logo from "./logo.svg";
import AvailableCars from "./Components/AvailableCars";

const useStyles = {
  home: {
    display: "flex", 
    width: "100%",
    height: "100%",
    backgroundColor: "#f8f8fa"
  }
}

const App: React.FC = () => {
  return (
    <div className="App" style={useStyles.home}>
      <div style={{flexDirection: "column", margin: "30px", width: "100%", display: "flex"}}>
        <AvailableCars></AvailableCars>
      </div>
    </div>
  );
};

export default App;
