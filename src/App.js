import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import datafile from "./resource-pages/datafile";
import Chat from './chat/Chat';
import Resources from "./resource-pages/Resources";
import SingleResource from "./resource-pages/SingleResource";
import { AuthProvider } from "./firebase-backend/context/AuthContext";
import FilterForm from "./questionnaire/filterForm";
import Footer from './home/Footer';
import Signup from "./firebase-backend/Signup";
import { Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import './App.css';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Container className="d-flex align-tiem-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <Signup />
          </div>
        </Container>
      </AuthProvider>
      <FilterForm />
      <Router>
        <nav>
          <div className="navbar-container">
            <Link to="/home" >
              <div className="icon-circle"><AiFillHome className="navbar-icons" /></div>
            </Link>
            <Link to="/chat">
              <div className="icon-circle"><BsFillChatDotsFill className="navbar-icons" /></div>
            </Link>
            <Link to="/questionnaire">
              <div className="icon-circle"><RiBookletLine className="navbar-icons" /></div>
            </Link>
            <Link to="/settings">
              <div className="icon-circle"><BsFillPersonFill className="navbar-icons" /></div>
            </Link>
          </div>
        </nav>
        <main>
          <Switch>
            <div>
              <Route exact path="/">
                <Resources />
              </Route>
              <Route path='/home' component={Home}></Route>
              <Route path='/chat' component={Chat}></Route>
              <Route path='/questionnaire'></Route>
              <Route path='/settings'></Route>
              <Route path="/resource/:id" render={(routerProps) => (
                <SingleResource {...routerProps} resourceData={datafile} />
              )}
              />
            </div>
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>
  )
}
export default App;
