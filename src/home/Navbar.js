import React, { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';

export default function Navbar() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <div>
                            <Link to="/home">Home</Link>
                            <Link to="/chat">Chat</Link>
                            <Link to="/questionnaire">Questionnaire</Link>
                            <Link to="/settings">Settings</Link>
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
                </div>
            </Router>
        </div>
    )
}