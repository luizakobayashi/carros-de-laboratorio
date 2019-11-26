import * as React from "react";
import logo from "./imgs/logo.png";
import user from "./imgs/user.png";
import AvailableCars from "./Components/AvailableCars";
import CarBuyForm from "./Components/CarBuyForm";
import FinishPage from "./Components/FinishPage";
import {
  Route,
  Link,
  BrowserRouter as Router,
  BrowserRouter,
  Switch
} from "react-router-dom";

const useStyles = {
  home: {
    display: "flex",
    width: "100%",
    backgroundColor: "#f8f8fa",
    flexDirection: "column",
    minHeight: "100vh"
  } as React.CSSProperties,

  header: {
    display: "flex",
    width: "100%",
    height: "55px",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    justifyContent: "space-between",
    padding: "5px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
  },

  img: {
    display: "flex",
    height: "60px",
    marginLeft: "50px",
    alignItems: "flex-start"
  },

  user: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: "20px",
    height: "40px"
  },

  userContent: {
    display: "flex",
    alignItems: "center"
  },

  userContentMessage: {
    marginRight: "5px"
  },

  homeContent: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    width: "100%",
    borderTop: "1.5px solid #cccc"
  } as React.CSSProperties
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App" style={useStyles.home}>
        <div style={useStyles.header}>
          <img src={logo} style={useStyles.img} />
          <div style={useStyles.user}>
            <div style={useStyles.userContent}>
              <div style={useStyles.userContentMessage}>olá usuário</div>
              <img src={user} style={useStyles.user} />
            </div>
          </div>
        </div>
        <div style={useStyles.homeContent}>
          <Switch>
            <Route exact path="/" component={AvailableCars}></Route>
            <Route path="/buy-car" component={CarBuyForm}></Route>
            <Route path="/finish" component={FinishPage}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
