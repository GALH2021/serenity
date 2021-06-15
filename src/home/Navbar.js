// import React, { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import './Navbar.css';
// import { AiFillHome } from "react-icons/ai";
// import { BsFillChatDotsFill, BsFillPersonFill } from "react-icons/bs";
// import { RiBookletLine } from "react-icons/ri";
// import Chat from 'src/chat/Chat.js';

// export default function Navbar() {
//     return (
//         <div>
//             <Router>
//                 <nav>
//                     <div className="navbar-container">
//                         <Link to="/home" >
//                             <div className="icon-circle"><AiFillHome className="navbar-icons" /></div>
//                         </Link>
//                         <Link to="/chat">
//                             <div className="icon-circle"><BsFillChatDotsFill className="navbar-icons" /></div>
//                         </Link>
//                         <Link to="/questionnaire">
//                             <div className="icon-circle"><RiBookletLine className="navbar-icons" /></div>
//                         </Link>
//                         <Link to="/settings">
//                             <div className="icon-circle"><BsFillPersonFill className="navbar-icons" /></div>
//                         </Link>
//                     </div>
//                     <main>
//                         <Switch>
//                             <div>
//                                 <Route path='/home' component={Home}></Route>
//                                 <Route path='/chat' component={Chat}></Route>
//                                 <Route path='/questionnaire'></Route>
//                                 <Route path='/settings'></Route>
//                             </div>
//                         </Switch>
//                     </main>
//                 </nav>
//             </Router>
//         </div>
//     )
// }