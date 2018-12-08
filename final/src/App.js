import React, { Component } from 'react';
import {
  BrowserRouter as 
  Link,
  Route,
  NavLink,
  HashRouter,
 
} from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import About from './About';

import './App.css'; 



class App extends Component {
   render() {
      return (
      
        <HashRouter>
         <div>
          <h1>WELCOME!</h1>
          <ul className="header">
          <div className="flex">
          <li><NavLink to="/Home">Winners</NavLink></li>
          <li><NavLink to="/Game">Game  </NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>

          </div>
          </ul>
           <div className="content">
      
     
          <Route  path='/Home' component={Home} />
          <Route  path='/Game' component={Game} />
          <Route  path='/About' component={About}  />
                   
          </div>
         </div>
        
       </HashRouter>
      );
   }
}
export default App;