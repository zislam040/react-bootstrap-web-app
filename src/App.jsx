import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import CustomNavbar from './Components/CustomNavbar';
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <Router>
          <div>
             <CustomNavbar/>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route eact path="/news" component={News} />
             
             <Footer/>
          </div>

      </Router>
    );
  }
}

export default App;
