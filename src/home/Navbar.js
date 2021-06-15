import React, { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import './Navbar.css';
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";

export default function Navbar() {
    return (
        <div>
            <Router>
                <nav>
                    <div className="navbar-container">
                        <div className="icon-circle">
                            <Link to="/home" ><AiFillHome className="navbar-icons" /></Link>
                        </div>
                        <div className="icon-circle">
                            <Link to="/chat"><BsFillChatDotsFill className="navbar-icons" /></Link>
                        </div>
                        <div className="icon-circle">
                            <Link to="/questionnaire"><RiBookletLine className="navbar-icons" /></Link>
                        </div>
                        <div className="icon-circle">
                            <Link to="/settings"><BsFillPersonFill className="navbar-icons" /></Link>
                        </div>
                    </div>
                    <main>
                        <Switch>
                            <div>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/chat'></Route>
                                <Route path='/questionnaire'></Route>
                                <Route path='/settings'></Route>
                            </div>
                        </Switch>
                    </main>
                </nav>
            </Router>
        </div>
    )
}