import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigationbar from './Components/Navbar';
import Footer from "./Components/Footer";
import PathBackground from "./Components/PathBackground";
import ScrollToTop from "./Components/ScrollToTop";
import Home from './Home';
import Homeopathy from './Homeopathy';
import Living_food from './Living_Food';

import "./"

export default class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navigationbar />
        <PathBackground />
  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/homeopathy' component={Homeopathy} />
          <Route path='/living food' component={Living_food} />
        </Switch>
  
        <Footer />
      </Router>
    );
  }
}
