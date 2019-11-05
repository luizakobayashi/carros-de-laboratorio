import React from "react";
import logo from "./logo.svg";
import AvailableCars from "./Components/AvailableCars";

const useStyles = {
  home: {
    display: "flex", 
    backgroundColor: "#f0f0f0",
  }
}

const App: React.FC = () => {
  return (
    <div className="App" style={useStyles.home}>
      <div style={{flexDirection: "column", margin: "30px", width: "100%"}}>
        <AvailableCars></AvailableCars>
      </div>
    </div>
  );
};

export default App;
