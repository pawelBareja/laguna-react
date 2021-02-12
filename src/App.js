import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
