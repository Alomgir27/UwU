import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
            <Switch>
              <Route  exact path='/' > <Home /> </Route>
              <Route  path='/home' > <Home /> </Route>
              <Route  path='/products' > <Products /> </Route>
              <Route  path='/services' > <Services /> </Route>
              <Route  path='/sign-up' > <SignUp /> </Route>
            </Switch>
            <Footer />
      </Router>
    </>
  );
}

export default App;
