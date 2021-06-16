import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import datafile from "./resource-pages/datafile";
import Chat from "./chat/Chat";
import Resources from "./resource-pages/Resources";
import SingleResource from "./resource-pages/SingleResource";
import { AuthProvider } from "./firebase-backend/context/AuthContext";
import FilterForm from "./questionnaire/filterForm";
import Footer from "./home/Footer";
import Signup from "./firebase-backend/components/Signup";
import Login from "./firebase-backend/components/Login";
import UserProfile from "./firebase-backend/components/UserProfile";
import PrivateRoute from "./firebase-backend/components/PrivateRoute";
import ForgotPassword from "./firebase-backend/components/ForgotPassword";
import { Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import "./App.css";

function App() {
  const apiURL = "https://serenity-api-ga.herokuapp.com/resources";
  const [resources, setResources] = React.useState([]);

  const getResources = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log("App.js api call: ", data);
    setResources(data);
  };

  React.useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="app">
      {/* Bips Part */}
      <Container className="d-flex align-tiem-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute
                  exact
                  path="/userProfile"
                  component={UserProfile}
                />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/forgotPassword"
                  component={ForgotPassword}
                />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>

      <Router>
        <nav>
          <div className="navbar-container">
            <Link to="/home">
              <div className="icon-circle">
                <AiFillHome className="navbar-icons" />
              </div>
            </Link>
            <Link to="/chat">
              <div className="icon-circle">
                <BsFillChatDotsFill className="navbar-icons" />
              </div>
            </Link>
            <Link to="/questionnaire">
              <div className="icon-circle">
                <RiBookletLine className="navbar-icons" />
              </div>
            </Link>
            <Link to="/settings">
              <div className="icon-circle">
                <BsFillPersonFill className="navbar-icons" />
              </div>
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <div>
              <Route path="/home">
                <Resources resourceData={resources} />
              </Route>

              <Route exact path="/" component={Home}></Route>
              <Route path="/chat" component={Chat}></Route>
              <Route
                path="/questionnaire"
                render={(routerProps) => <FilterForm {...routerProps} />}
              ></Route>
              <Route path="/settings"></Route>
              <Route
                path="/resource/:id"
                render={(routerProps) => <SingleResource {...routerProps} />}
              />
            </div>
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>
  );
}
export default App;
